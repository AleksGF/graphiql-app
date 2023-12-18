const PADDING_SIZE = 2;

export const prettifyGraphQl = (query: string): string => {
  // Store multiline strings in """ """ with prefixed UUID to paste them back later.
  const stringsTemp = query
    .match(/("{3}(.|\s)*?"{3})/gi)
    ?.reduce((obj: Record<string, string>, str) => {
      const key = `&prty-${crypto.randomUUID()}`;
      obj[key] = str;
      return obj;
    }, {});

  let preProcessedInput = query;
  for (const key in stringsTemp) {
    if (Object.hasOwnProperty.call(stringsTemp, key)) {
      const element = stringsTemp[key];
      preProcessedInput = preProcessedInput.replaceAll(element, key);
    }
  }

  const lines = preProcessedInput
    .trim()
    .replaceAll(/\s*#.*/gi, '\n') // remove commented strings
    .replaceAll('\n', ' ') // make it single line
    .replaceAll(/(^{|}$)/gi, '\n$1\n') // add new lines if { or } placed at beginning or end of line to handle query wrapped in curly braces
    .replaceAll(/\s*(\()\s*/gi, '$1') // remove spaces around (
    .replaceAll(/\s*(\))\s*/gi, '$1 ') // remove spaces around ) and add one after
    .replaceAll(/((query|subscription|mutation).*?{)/gi, '\n$1\n') // move to new line: "query|subscription|mutation ... {"
    .replaceAll(/(fragment\s+[\w\.]+\s+on\s+\w+\s*{)/gi, '\n$1\n') // move to new line: "fragment ... on ... {" statements
    .replaceAll(/(\w+\s*:\s+\w+\s*\(\s*\w+\s*:\s*\w+\s*\)\s*{)/gi, '\n$1\n') // move to new line: "word: word(word: word) {"
    .replaceAll(/(?<!:.*)(\w+\s*\(\s*\w+\s*:\s*[\w\$]+\s*\)\s*{)/gi, '\n$1\n') // move to new line: "word(word: word) {" but not predicated by :
    .replaceAll(
      /(?<={.*)(\w+\s*\(\s*\w+\s*:\s*[\w\$]+\s*\))(?=.*})/gi,
      '\n$1\n',
    ) // move to new line: "word(word: word)" in curly braces
    .replaceAll(/(\.{3}\w+)/gi, '\n$1\n') // move to new line: "...word"
    .replaceAll(/(\w+(?=.*})(?!.*\)))/gi, '\n$1\n') // move to new line: word not followed by } but not )
    .replaceAll(/((?<={.*)\w+(?!.*\)))/gi, '\n$1\n') //move to new line: word predicated by { but not followed by )
    .replaceAll(/(?<!\(.*)}/gi, '\n}') // move to new line: } not predicated by (
    .replaceAll(/(\w|\))\s*({)/gi, '$1 $2') // add space between word or ) and {
    .replaceAll(/(fragment)?\s+([\w\.]+)\s+on\s+(\w+) {/gi, '\n$1 $2 on $3 {') // move back on single line: "fragment? word on word {"
    .replaceAll(
      /(&prty-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.*?)}/gi,
      '$1\n}', // add newline after multiline strings prefixed uuid.
    );

  const linesSplitted = lines.split('\n').reduce((result: string[], line) => {
    const trimmed = line.trim();

    if (trimmed.length > 0) {
      result.push(trimmed);
    }

    return result;
  }, []);

  const linesPadded: string[] = [];
  for (let index = 0, indent = 0; index < linesSplitted.length; index++) {
    const line = linesSplitted[index];

    let padded: string;
    if (line.match(/^{|{$/)) {
      padded = line.padStart(line.length + indent, ' ');
      indent += PADDING_SIZE;
      linesPadded.push(padded);
      continue;
    }

    if (line.match(/^}/)) {
      indent -= PADDING_SIZE;
    }

    padded = line.padStart(line.length + indent, ' ');

    linesPadded.push(padded);
  }

  let result = linesPadded
    .join('\n')
    .replaceAll(/\n(query|fragment|subscription|mutation)/gi, '\n\n$1');

  // Restore saved multiline strings by prefix uuid
  for (const key in stringsTemp) {
    if (Object.hasOwnProperty.call(stringsTemp, key)) {
      const element = stringsTemp[key];
      result = result.replace(key, element);
    }
  }

  result = result.replaceAll(/(?<=.*""".*)}/gi, '\n}');

  return result;
};
