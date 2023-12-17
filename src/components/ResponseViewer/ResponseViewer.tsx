import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { LANGUAGES } from '@/constants/dictionaries';
import { useLanguageContext } from '@/context';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { useTheme } from '@mui/material';
import { useAppSelector } from '@/hooks/hooks';

interface ResponseViewerProps {
  height?: string;
}

export default function ResponseViewer({
  height = '100%',
}: ResponseViewerProps) {
  const { content } = useAppSelector((state) => state.responseViewer);
  const { language } = useLanguageContext();
  const theme = useTheme();

  return (
    <CodeMirror
      style={{ height: '100%' }}
      value={
        content
          ? JSON.stringify(JSON.parse(content), null, 2)
          : LANGUAGES[language].RESPONSE_VIEWER_PLACEHOLDER
      }
      height={height}
      theme={theme.palette.mode === 'dark' ? materialDark : materialLight}
      extensions={[json()]}
      readOnly
    />
  );
}
