import CodeMirror from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { graphql } from 'cm6-graphql';
import { LANGUAGES } from '@/constants/dictionaries';
import { useLanguageContext } from '@/context';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setContent } from '@/store/reducers/queryEditorSlice';

interface QueryEditorProps {
  height?: string;
}

export default function QueryEditor({ height = '200px' }: QueryEditorProps) {
  const { content } = useAppSelector((state) => state.queryEditor);
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();

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
      value={content}
      height={height}
      theme={material}
      extensions={[graphql()]}
      onChange={onChange}
    />
  );
}
