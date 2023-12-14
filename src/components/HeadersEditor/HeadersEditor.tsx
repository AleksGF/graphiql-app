import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { Alert, useTheme } from '@mui/material';

export default function HeadersEditor() {
  const { palette } = useTheme();

  const [parseError, setParseError] = useState<string | null>(null);

  const onChange = (value: string) => {
    if (!value.trim().length) {
      setParseError(null);

      return;
    }

    try {
      const json = JSON.parse(value);
      setParseError(null);
      console.log(json);
    } catch (error: unknown) {
      setParseError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <>
      <CodeMirror
        theme={palette.mode === 'light' ? materialLight : materialDark}
        onChange={onChange}
        extensions={[EditorView.lineWrapping]}
      />
      {!!parseError && (
        <Alert
          severity="warning"
          sx={{
            pt: 0,
            pb: 0,
            '& .MuiAlert-icon': {
              p: 0,
            },
            '& .MuiAlert-message': {
              p: 0,
            },
          }}
        >
          {parseError}
        </Alert>
      )}
    </>
  );
}
