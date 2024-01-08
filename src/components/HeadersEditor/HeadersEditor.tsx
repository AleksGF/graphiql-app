import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  HeadersEditorContent,
  setHeadersEditorContent,
} from '@/store/reducers/headersEditorSlice';
import Box from '@mui/material/Box';
import { SecondaryEditor } from '@/components';

export default function HeadersEditor() {
  const dispatch = useAppDispatch();
  const { content } = useAppSelector((state) => state.headersEditor);

  const initialValue = content ? JSON.stringify(content, null, 2) : '';

  const setValue = useCallback(
    (value: HeadersEditorContent) => {
      dispatch(setHeadersEditorContent(value));
    },
    [dispatch],
  );

  return (
    <Box>
      <SecondaryEditor initialValue={initialValue} setValue={setValue} />
    </Box>
  );
}
