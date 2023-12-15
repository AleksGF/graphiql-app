import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { graphql } from 'cm6-graphql';
import { LANGUAGES } from '@/constants/dictionaries';
import { useLanguageContext } from '@/context';

interface QueryEditorProps {
  height?: string;
}

export default function QueryEditor({ height = '200px' }: QueryEditorProps) {
  const { language } = useLanguageContext();

  return (
    <CodeMirror
      value={LANGUAGES[language].QUERY_EDITOR_PLACEHOLDER}
      height={height}
      theme={material}
      extensions={[graphql()]}
    />
  );
}
