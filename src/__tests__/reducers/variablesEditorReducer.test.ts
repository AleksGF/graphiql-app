import reducer, {
  setVariablesEditorContent,
  VariablesEditorContent,
  VariablesEditorState,
} from '@/store/reducers/variablesEditorSlice';

const content: VariablesEditorContent = {
  name: 'name',
  value: 'value',
};

const initialState: VariablesEditorState = {
  content: null,
};

const stateWithContent: VariablesEditorState = {
  content,
};

describe('variablesEditorReducer should work correctly and: ', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setVariablesEditorContent should set content', () => {
    expect(reducer(initialState, setVariablesEditorContent(content))).toEqual(
      stateWithContent,
    );
    expect(reducer(stateWithContent, setVariablesEditorContent(null))).toEqual(
      initialState,
    );
  });
});
