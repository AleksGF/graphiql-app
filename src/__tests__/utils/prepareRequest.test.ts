import axios from 'axios';
import { prepareRequest } from '@/utils/prepareRequest';

vi.mock('axios');

describe('prepareRequest ', () => {
  it('should create an Axios instance with the correct method and headers', () => {
    const userHeaders = { 'Content-Type': 'application/json' };

    const axiosCreateMock = vi.spyOn(axios, 'create');

    prepareRequest(userHeaders);

    expect(axiosCreateMock).toHaveBeenCalledWith({
      method: 'POST',
      headers: userHeaders,
    });
  });
});
