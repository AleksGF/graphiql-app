import {
  defaultApiHeaders,
  defaultApiMethod,
  defaultApiQuery,
} from '@/constants/api';
import { HeadersEditorContent } from '@/store/reducers/headersEditorSlice';
import { VariablesEditorContent } from '@/store/reducers/variablesEditorSlice';

export const prepareRequest = (
  url: string,
  headers: HeadersEditorContent = {},
  query: string = defaultApiQuery,
  variables: VariablesEditorContent = {},
): Request => {
  const req = new Request(url, {
    method: defaultApiMethod,
    mode: 'cors',
    headers: defaultApiHeaders,
    body: JSON.stringify({
      query,
      variables: variables ?? {},
    }),
  });

  if (headers) {
    for (const [name, value] of Object.entries(headers)) {
      try {
        req.headers.set(name, value);
      } catch (e) {}
    }
  }

  return req;
};
