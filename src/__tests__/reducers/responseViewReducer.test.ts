import { AxiosError, AxiosHeaders } from 'axios';
import reducer, {
  clearFetchError,
  fetchApi,
  ResponseViewerState,
} from '@/store/reducers/responseViewSlice';
import { HTTP_STATUS } from '@/constants/api';

const content = 'some content';
const fetchError = 'some error';

const initialState: ResponseViewerState = {
  content: '',
  isFetching: false,
  fetchError: null,
};

const stateWithContent: ResponseViewerState = {
  ...initialState,
  content,
};

const stateWithError: ResponseViewerState = {
  ...stateWithContent,
  fetchError,
};

const apiUrl = 'http://localhost';
const apiForRespError = 'http://localhost/get-resp-with-error';
const apiForAxiosError = 'http://localhost/get-axios-error';
const apiForError = 'http://localhost/get-error';

const mockState = {
  queryEditor: { content: '{ query { name } }' },
  headersEditor: { content: '{ "Content-Type": "application/json" }' },
  variablesEditor: { content: { key: 'value' } },
  apiEndpoint: { apiUrl },
};

describe('responseViewReducer should work correctly and: ', () => {
  const dispatch = vi.fn();

  beforeAll(() => {
    vi.mock('@/utils/prettifyGraphQl', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      prettifyGraphQl: (arg: string) => arg,
    }));

    vi.mock('@/utils/prepareRequest', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      prepareRequest: () => (arg: string) => {
        if (arg === apiUrl)
          return new Promise((resolve) =>
            resolve({ data: { data: { key: 'value' } } }),
          );

        if (arg === apiForRespError)
          return new Promise((resolve) =>
            resolve({ data: { errors: [{ message: 'some api error' }] } }),
          );

        if (arg === apiForError)
          return new Promise((_, reject) => reject({ message: 'some error' }));

        const error = new AxiosError(
          '',
          '',
          { headers: new AxiosHeaders() },
          null,
          {
            config: { headers: new AxiosHeaders() },
            data: { errors: [{ message: 'some Axios error' }] },
            headers: new AxiosHeaders(),
            request: undefined,
            statusText: '',
            status: HTTP_STATUS.Code_500,
          },
        );
        return new Promise((_, reject) => reject(error));
      },
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('clearFetchError should set fetchError to null and set empty content', () => {
    expect(reducer(stateWithError, clearFetchError())).toEqual(initialState);
  });

  it('fetchApi.pending should set isFetching to true and fetchError to null', () => {
    expect(reducer(stateWithError, fetchApi.pending(''))).toEqual({
      ...stateWithContent,
      isFetching: true,
    });
  });

  it('fetchApi.fulfilled should set content and isFetching to false', () => {
    expect(
      reducer(
        { ...initialState, isFetching: true },
        fetchApi.fulfilled(content, ''),
      ),
    ).toEqual(stateWithContent);
  });

  it('fetchApi.rejected should set fetchError and isFetching to false', () => {
    expect(
      reducer(
        { ...initialState, isFetching: true },
        fetchApi.rejected(new Error(fetchError), ''),
      ),
    ).toEqual({ ...initialState, fetchError });
  });

  it('thunk fetchApi should work correctly with success response', async () => {
    const thunk = fetchApi();

    await thunk(
      dispatch,
      () => {
        return mockState;
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, fulfilled] = dispatch.mock.calls;
    expect(pending[0].type).toBe(fetchApi.pending('').type);
    expect(fulfilled[0].type).toBe(fetchApi.fulfilled('', apiUrl).type);
    expect(fulfilled[0].payload).toBe(
      JSON.stringify({ key: 'value' }, null, 2),
    );
  });

  it('thunk fetchApi should work correctly with error response', async () => {
    const thunk = fetchApi();

    await thunk(
      dispatch,
      () => {
        return { ...mockState, apiEndpoint: { apiUrl: apiForRespError } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, fulfilled] = dispatch.mock.calls;
    expect(pending[0].type).toBe(fetchApi.pending('').type);
    expect(fulfilled[0].type).toBe(fetchApi.fulfilled('', apiUrl).type);
    expect(fulfilled[0].payload).toBe('some api error');
  });

  it('thunk fetchApi should work correctly with query error', async () => {
    const thunk = fetchApi();

    await thunk(
      dispatch,
      () => {
        return { ...mockState, apiEndpoint: { apiUrl: apiForError } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, rejected] = dispatch.mock.calls;
    expect(pending[0].type).toBe(fetchApi.pending('').type);
    expect(rejected[0].type).toBe(fetchApi.rejected(new Error(), apiUrl).type);
    expect(rejected[0].payload).toBe('REQUEST_ERROR_UNKNOWN');
  });

  it('thunk fetchApi should work correctly with Axios error', async () => {
    const thunk = fetchApi();

    await thunk(
      dispatch,
      () => {
        return { ...mockState, apiEndpoint: { apiUrl: apiForAxiosError } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, fulfilled] = dispatch.mock.calls;
    expect(pending[0].type).toBe(fetchApi.pending('').type);
    expect(fulfilled[0].type).toBe(fetchApi.fulfilled('', apiUrl).type);
    expect(fulfilled[0].payload).toBe('some Axios error');
  });
});
