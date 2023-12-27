import React, { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { useTheme } from '@mui/material';
import { useLanguageContext } from '@/context';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { clearFetchError } from '@/store/reducers/responseViewSlice';
import { ErrorMessage } from '@/components';
import { Dictionary, LANGUAGES } from '@/constants/dictionaries';
import { EditorView } from '@codemirror/view';

interface ResponseViewerProps {
  height?: string;
}

export default function ResponseViewer({
  height = '100%',
}: ResponseViewerProps) {
  const dispatch = useAppDispatch();
  const { content, fetchError } = useAppSelector(
    (state) => state.responseViewer,
  );
  const { language } = useLanguageContext();
  const theme = useTheme();

  const clearErrorMessage = useCallback(() => {
    dispatch(clearFetchError());
  }, [dispatch]);

  return (
    <>
      <CodeMirror
        style={{ height: '100%' }}
        value={
          content ? content : LANGUAGES[language].RESPONSE_VIEWER_PLACEHOLDER
        }
        height={height}
        theme={theme.palette.mode === 'dark' ? materialDark : materialLight}
        extensions={[json(), EditorView.lineWrapping]}
        readOnly
      />
      {!!fetchError && (
        <ErrorMessage
          message={
            LANGUAGES[language][fetchError as keyof Dictionary] ??
            LANGUAGES[language].QUERY_ERROR_DEFAULT
          }
          isOpen={true}
          handleClose={clearErrorMessage}
        />
      )}
    </>
  );
}
