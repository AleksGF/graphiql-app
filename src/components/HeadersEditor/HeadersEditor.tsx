import React, { useCallback } from 'react';
import { useAppDispatch } from '@/hooks/hooks';
import {
  HeadersEditorContent,
  setHeadersEditorContent,
} from '@/store/reducers/headersEditorSlice';
import Box from '@mui/material/Box';
import SecondaryEditor from '@/components/SecondaryEditor/SecondaryEditor';

export default function HeadersEditor() {
  const dispatch = useAppDispatch();

  const setValue = useCallback(
    (value: HeadersEditorContent) => {
      dispatch(setHeadersEditorContent(value));
    },
    [dispatch],
  );

  return (
    <Box>
      <SecondaryEditor setValue={setValue} />
    </Box>
  );
}
