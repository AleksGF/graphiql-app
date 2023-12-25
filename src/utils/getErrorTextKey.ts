import { AxiosError } from 'axios';
import { Dictionary } from '@/constants/dictionaries';
import { HTTP_STATUS } from '@/constants/api';

export const getErrorTextKey = (error: unknown): keyof Dictionary => {
  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= HTTP_STATUS.Code_500
  ) {
    return 'REQUEST_ERROR_500';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status === HTTP_STATUS.Code_401
  ) {
    return 'REQUEST_ERROR_401';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= HTTP_STATUS.Code_400
  ) {
    return 'REQUEST_ERROR_400';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= HTTP_STATUS.Code_300
  ) {
    return 'REQUEST_ERROR_300';
  }

  if (error instanceof AxiosError && error.response) {
    return 'REQUEST_ERROR_100';
  }

  if (error instanceof AxiosError && error.request) {
    return 'REQUEST_ERROR_BASE';
  }

  return 'REQUEST_ERROR_UNKNOWN';
};
