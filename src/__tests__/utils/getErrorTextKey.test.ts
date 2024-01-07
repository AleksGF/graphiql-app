import { AxiosError, AxiosHeaders } from 'axios';
import { getErrorTextKey } from '@/utils/getErrorTextKey';

const headers = new AxiosHeaders();

const getError = (status: number) => {
  return new AxiosError('', '', { headers }, null, {
    config: { headers },
    data: undefined,
    headers,
    request: undefined,
    statusText: '',
    status,
  });
};

const codes = [100, 300, 400, 401, 500];

describe('getErrorTextKey', () => {
  it('should return correct error text key', () => {
    codes.forEach((code) => {
      const error = getError(code);
      expect(getErrorTextKey(error)).toBe(`REQUEST_ERROR_${code}`);
    });

    const error = getError(200);
    error.response = undefined;

    expect(getErrorTextKey(error)).toBe('REQUEST_ERROR_UNKNOWN');

    error.request = {};
    expect(getErrorTextKey(error)).toBe('REQUEST_ERROR_BASE');
  });
});
