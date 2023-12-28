import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  VariablesEditorContent,
  setVariablesEditorContent,
} from '@/store/reducers/variablesEditorSlice';
import Box from '@mui/material/Box';
import { SecondaryEditor } from '@/components';

export default function VariablesEditor() {
  const dispatch = useAppDispatch();
  const { content } = useAppSelector((state) => state.variablesEditor);

  const initialValue = content ? JSON.stringify(content, null, 2) : '';

  const setValue = useCallback(
    (value: VariablesEditorContent) => {
      dispatch(setVariablesEditorContent(value));
    },
    [dispatch],
  );

  return (
    <Box>
      <SecondaryEditor initialValue={initialValue} setValue={setValue} />
    </Box>
  );
}
