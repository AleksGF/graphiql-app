import reducer, {
  setNewEndpoint,
  toggleEndpointEditMode,
  setNewEndpointCurrentInput,
  EndpointEditorState,
} from '@/store/reducers/endpointEditorSlice';

const initialEndpoint =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';
const newEndpoint = 'http://some-new-endpoint.com/graphql';

const initialState: EndpointEditorState = {
  currentEndpoint: initialEndpoint,
  isEndpointEditMode: false,
  newEndpointCurrentInput: '',
};

const stateWithNewEndpoint: EndpointEditorState = {
  currentEndpoint: newEndpoint,
  isEndpointEditMode: false,
  newEndpointCurrentInput: '',
};

const stateWithEditMode: EndpointEditorState = {
  currentEndpoint: initialEndpoint,
  isEndpointEditMode: true,
  newEndpointCurrentInput: '',
};

describe('endpointEditorReducer should work correctly and:', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setNewEndpoint should work correctly', () => {
    expect(
      reducer(
        { ...initialState, newEndpointCurrentInput: newEndpoint },
        setNewEndpoint(),
      ),
    ).toEqual(stateWithNewEndpoint);

    expect(
      reducer(
        { ...initialState, newEndpointCurrentInput: initialEndpoint },
        setNewEndpoint(),
      ),
    ).toEqual(initialState);
  });

  it('toggleEndpointEditMode should work correctly', () => {
    expect(reducer(initialState, toggleEndpointEditMode(true))).toEqual(
      stateWithEditMode,
    );

    expect(reducer(stateWithEditMode, toggleEndpointEditMode(false))).toEqual(
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
