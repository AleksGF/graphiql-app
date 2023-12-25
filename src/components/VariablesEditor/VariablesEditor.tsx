import React, { useCallback } from 'react';
import { useAppDispatch } from '@/hooks/hooks';
import {
  VariablesEditorContent,
  setVariablesEditorContent,
} from '@/store/reducers/variablesEditorSlice';
import Box from '@mui/material/Box';
import SecondaryEditor from '@/components/SecondaryEditor/SecondaryEditor';

export default function VariablesEditor() {
  const dispatch = useAppDispatch();

  const setValue = useCallback(
    (value: VariablesEditorContent) => {
      dispatch(setVariablesEditorContent(value));
    },
    [dispatch],
  );

  return (
    <Box>
      <SecondaryEditor setValue={setValue} />
    </Box>
  );
}
