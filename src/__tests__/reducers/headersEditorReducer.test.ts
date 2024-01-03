import reducer, {
  HeadersEditorContent,
  HeadersEditorState,
  setHeadersEditorContent,
} from '@/store/reducers/headersEditorSlice';

const content: HeadersEditorContent = {
  'Content-Type': 'application/json',
};

const initialState: HeadersEditorState = {
  content: null,
};

const steteWithContent: HeadersEditorState = {
  content,
};

describe('headersEditorReducer should work correctly and: ', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setHeadersEditorContent should set content', () => {
    expect(reducer(initialState, setHeadersEditorContent(content))).toEqual(
      steteWithContent,
    );
    expect(reducer(steteWithContent, setHeadersEditorContent(null))).toEqual(
      initialState,
    );
  });
});
