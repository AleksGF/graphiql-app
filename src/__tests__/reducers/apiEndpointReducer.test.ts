import { AxiosError, AxiosHeaders } from 'axios';
import reducer, {
  clearAddingEndpointError,
  addNewEndpoint,
  ApiEndpoint,
} from '@/store/reducers/apiEndpointSlice';
import { HTTP_STATUS } from '@/constants/api';

const apiAddingError = 'some error';
const apiUrl = 'https://swapi-graphql.netlify.app';
const altApiUrl = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const initialState: ApiEndpoint = {
  isApiFetching: false,
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  apiAddingError: null,
};

const stateWithError: ApiEndpoint = {
  ...initialState,
  apiAddingError,
};

const stateWithFetching: ApiEndpoint = {
  ...initialState,
  isApiFetching: true,
};

describe('apiEndpointReducer should work correctly and: ', () => {
  const dispatch = vi.fn();

  beforeAll(() => {
    vi.mock('@/utils/prepareRequest', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      prepareRequest: () => (arg: string) => {
        if (arg === apiUrl) return new Promise((resolve) => resolve(null));

        if (arg === apiAddingError)
          return new Promise((_, reject) =>
            reject({ message: apiAddingError }),
          );

        const error = new AxiosError(
          '',
          '',
          { headers: new AxiosHeaders() },
          null,
          {
            config: { headers: new AxiosHeaders() },
            data: undefined,
            headers: new AxiosHeaders(),
            request: undefined,
            statusText: '',
            status: HTTP_STATUS.Code_401,
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

  it('clearAddingEndpointError should set apiAddingError to null', () => {
    expect(reducer(stateWithError, clearAddingEndpointError())).toEqual(
      initialState,
    );
  });

  it('addNewEndpoint.pending should set apiAddingError to null and isApiFetching to true', () => {
    expect(reducer(stateWithError, addNewEndpoint.pending('', apiUrl))).toEqual(
      { ...initialState, isApiFetching: true },
    );
  });

  it('addNewEndpoint.fulfilled should set apiEndpointUrl and isApiFetching to false', () => {
    expect(
      reducer(
        stateWithFetching,
        addNewEndpoint.fulfilled(apiUrl, apiUrl, apiUrl),
      ),
    ).toEqual({ ...initialState, apiUrl });
  });

  it('addNewEndpoint.rejected should set apiAddingError and isApiFetching to false', () => {
    expect(
      reducer(
        stateWithFetching,
        addNewEndpoint.rejected(new Error(apiAddingError), apiUrl, apiUrl),
      ),
    ).toEqual({ ...initialState, apiAddingError });
  });

  it('thunk addNewEndpoint should work correctly with success response', async () => {
    const thunk = addNewEndpoint(apiUrl);

    await thunk(
      dispatch,
      () => {
        return { headersEditor: { content: null } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, fulfilled] = dispatch.mock.calls;
    expect(pending[0].type).toBe(addNewEndpoint.pending('', apiUrl).type);
    expect(fulfilled[0].type).toBe(
      addNewEndpoint.fulfilled('', apiUrl, apiUrl).type,
    );
    expect(fulfilled[0].payload).toBe(apiUrl);
  });

  it('thunk addNewEndpoint should work correctly with error', async () => {
    const thunk = addNewEndpoint(apiAddingError);

    await thunk(
      dispatch,
      () => {
        return { headersEditor: { content: null } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, rejected] = dispatch.mock.calls;
    expect(pending[0].type).toBe(addNewEndpoint.pending('', apiUrl).type);
    expect(rejected[0].type).toBe(
      addNewEndpoint.rejected(new Error(), apiUrl, apiUrl).type,
    );
    expect(rejected[0].payload).toBe('REQUEST_ERROR_UNKNOWN');
  });

  it('thunk addNewEndpoint should work correctly with 401 code response', async () => {
    const thunk = addNewEndpoint(altApiUrl);

    await thunk(
      dispatch,
      () => {
        return { headersEditor: { content: null } };
      },
      undefined,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    const [pending, fulfilled] = dispatch.mock.calls;
    expect(pending[0].type).toBe(addNewEndpoint.pending('', apiUrl).type);
    expect(fulfilled[0].type).toBe(
      addNewEndpoint.fulfilled('', apiUrl, apiUrl).type,
    );
    expect(fulfilled[0].payload).toBe(altApiUrl);
  });
});
