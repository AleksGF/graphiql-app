import reducer, {
  setEndpointEditMode,
  setNewEndpointCurrentInput,
  EndpointEditorState,
} from '@/store/reducers/endpointEditorSlice';

const initialEndpoint =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';
const newEndpoint = 'http://some-new-endpoint.com/graphql';

const initialState: EndpointEditorState = {
  isEndpointEditMode: false,
  newEndpointCurrentInput: '',
};

const stateWithEditMode: EndpointEditorState = {
  isEndpointEditMode: true,
  newEndpointCurrentInput: '',
};

describe('endpointEditorReducer should work correctly and:', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('toggleEndpointEditMode should work correctly', () => {
    expect(reducer(initialState, setEndpointEditMode(true))).toEqual(
      stateWithEditMode,
    );

    expect(reducer(stateWithEditMode, setEndpointEditMode(false))).toEqual(
      initialState,
    );
  });

  it('setActiveEditorTab should work correctly', () => {
    expect(
      reducer(initialState, setNewEndpointCurrentInput(initialEndpoint)),
    ).toEqual({ ...initialState, newEndpointCurrentInput: initialEndpoint });

    expect(
      reducer(initialState, setNewEndpointCurrentInput(newEndpoint)),
    ).toEqual({ ...initialState, newEndpointCurrentInput: newEndpoint });

    expect(
      reducer(
        { ...initialState, newEndpointCurrentInput: newEndpoint },
        setNewEndpointCurrentInput(''),
      ),
    ).toEqual(initialState);
  });
});
