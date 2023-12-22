import { AxiosError } from 'axios';

export const getErrorTextKey = (error: unknown): string => {
  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= 500
  ) {
    return 'REQUEST_ERROR_500';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status === 401
  ) {
    return 'REQUEST_ERROR_401';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= 400
  ) {
    return 'REQUEST_ERROR_400';
  }

  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.status >= 300
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
