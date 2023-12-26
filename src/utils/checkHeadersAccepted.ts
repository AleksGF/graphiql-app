import { Keys } from '@/constants/dictionaries';

export const checkHeadersAccepted = (
  enteredHeaders: Record<string, string>,
  acceptedHeaders: '*' | string[] | null,
):
  | {
      isOk: true;
    }
  | {
      isOk: false;
      messageKey: string;
    } => {
  if (!acceptedHeaders)
    return {
      isOk: false,
      messageKey: Keys.HEADERS_SERVER_NOT_ACCEPT_ANY,
    };

  if (acceptedHeaders === '*') return { isOk: true };

  return Object.keys(enteredHeaders).every((key) =>
    acceptedHeaders
      .map((header) => header.toLowerCase())
      .includes(key.toLowerCase()),
  )
    ? { isOk: true }
    : {
        isOk: false,
        messageKey: Keys.HEADERS_SERVER_ACCEPT_ONLY,
      };
};
