import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { LANGUAGES } from '@/constants/dictionaries';
import { useLanguageContext } from '@/context';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setContent } from '@/store/reducers/queryEditorSlice';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { useTheme } from '@mui/material';

interface QueryEditorProps {
  height?: string;
}

export default function QueryEditor({ height = '100%' }: QueryEditorProps) {
  const { content } = useAppSelector((state) => state.queryEditor);
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();
  const theme = useTheme();

  useEffect(() => {
    dispatch(setContent(LANGUAGES[language].QUERY_EDITOR_PLACEHOLDER));
  }, [dispatch, language]);

  const onChange = useCallback(
    (value: string) => {
      dispatch(setContent(value));
    },
    [dispatch],
  );

  return (
    <CodeMirror
      style={{
        height: '100%',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }}
      value={content}
      height={height}
      theme={theme.palette.mode === 'dark' ? materialDark : materialLight}
      extensions={[graphql()]}
      onChange={onChange}
    />
  );
}
