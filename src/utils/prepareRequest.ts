import axios, { AxiosInstance } from 'axios';
import { defaultApiHeaders, defaultApiMethod } from '@/constants/api';
import { HeadersEditorContent } from '@/store/reducers/headersEditorSlice';

export const prepareRequest = (
  userHeaders: HeadersEditorContent = {},
): AxiosInstance => {
  const method = defaultApiMethod;

  const headers = { ...(userHeaders ?? {}), ...defaultApiHeaders };

  return axios.create({
    method,
    headers,
  });
};
