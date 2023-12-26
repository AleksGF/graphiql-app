import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { useTheme } from '@mui/material';
import CustomTooltip from './CustomTooltip';
import { HeadersEditorContent } from '@/store/reducers/headersEditorSlice';
import { VariablesEditorContent } from '@/store/reducers/variablesEditorSlice';
import { useLanguageContext } from '@/context';
import { LANGUAGES } from '@/constants/dictionaries';

interface SecondaryEditorProps {
  setValue: (value: HeadersEditorContent | VariablesEditorContent) => void;
}

export default function SecondaryEditor({ setValue }: SecondaryEditorProps) {
  const { language } = useLanguageContext();
  const { palette } = useTheme();

  const [parseError, setParseError] = useState<string | null>(null);

  const onChange = (value: string) => {
    if (!value.trim().length) {
      setParseError(null);

      return;
    }

    try {
      const parsedValue = JSON.parse(value);
      setParseError(null);
      setValue(parsedValue);
    } catch (error: unknown) {
      setParseError(error instanceof Error ? error.message : String(error));
      setValue(null);
    }
  };

  return (
    <>
      <CodeMirror
        theme={palette.mode === 'light' ? materialLight : materialDark}
        onChange={onChange}
        extensions={[EditorView.lineWrapping]}
      />
      <CustomTooltip
        open={!!parseError}
        title={
          parseError
            ? `${LANGUAGES[language].HEADERS_ENTER_NOT_VALID} ${parseError}`
            : ''
        }
        placement={'bottom'}
        arrow
      >
        <div />
      </CustomTooltip>
    </>
  );
}
