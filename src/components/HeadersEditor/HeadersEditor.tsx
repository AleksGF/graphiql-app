import React, { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  HeadersEditorContent,
  setHeadersEditorContent,
} from '@/store/reducers/headersEditorSlice';
import Box from '@mui/material/Box';
import { Alert, Fade } from '@mui/material';
import SecondaryEditor from '@/components/SecondaryEditor/SecondaryEditor';
import { checkHeadersAccepted } from '@/utils/checkHeadersAccepted';
import { useLanguageContext } from '@/context';
import { Keys, LANGUAGES } from '@/constants/dictionaries';

export default function HeadersEditor() {
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();

  const { acceptedHeaders } = useAppSelector((state) => state.apiEndpoint);

  const [headersError, setHeadersError] = useState<string | null>(null);

  const setValue = useCallback(
    (value: HeadersEditorContent) => {
      if (!value) {
        dispatch(setHeadersEditorContent(null));
        setHeadersError(null);

        return;
      }

      const checkHeadersResult = checkHeadersAccepted(value, acceptedHeaders);

      if (checkHeadersResult.isOk) {
        dispatch(setHeadersEditorContent(value));
        setHeadersError(null);

        return;
      }

      const errorMessage =
        checkHeadersResult.messageKey === Keys.HEADERS_SERVER_NOT_ACCEPT_ANY
          ? LANGUAGES[language].HEADERS_SERVER_NOT_ACCEPT_ANY
          : `${LANGUAGES[language].HEADERS_SERVER_ACCEPT_ONLY} ${(
              acceptedHeaders as string[]
            ).join(', ')}`;
      setHeadersError(errorMessage);
    },
    [acceptedHeaders, dispatch, language],
  );

  return (
    <Box>
      <SecondaryEditor setValue={setValue} />
      <Fade in={!!headersError}>
        <Alert severity="error">{headersError}</Alert>
      </Fade>
    </Box>
  );
}
