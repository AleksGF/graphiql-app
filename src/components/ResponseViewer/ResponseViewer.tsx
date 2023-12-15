import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { json } from '@codemirror/lang-json';
import { LANGUAGES } from '@/constants/dictionaries';
import { useLanguageContext } from '@/context';

interface ResponseViewerProps {
  height?: string;
}

export default function ResponseViewer({
  height = '100%',
}: ResponseViewerProps) {
  const { language } = useLanguageContext();

  return (
    <CodeMirror
      style={{ height: '100%' }}
      value={LANGUAGES[language].RESPONSE_VIEWER_PLACEHOLDER}
      height={height}
      theme={material}
      extensions={[json()]}
      readOnly
    />
  );
}
