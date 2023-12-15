import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { materialLight, materialDark } from '@uiw/codemirror-theme-material';
import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: '100%',
    backgroundColor: theme.palette.error.dark,
  },
}));

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
      <CustomTooltip
        open={!!parseError}
        title={parseError ?? ''}
        placement={'bottom'}
        arrow
      >
        <div />
      </CustomTooltip>
    </>
  );
}
