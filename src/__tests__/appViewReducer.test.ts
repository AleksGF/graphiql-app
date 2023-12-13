import reducer, {
  toggleIsDocDrawerOpen,
  toggleEditorAccordionOpen,
  setActiveEditorTab,
  AppViewState,
} from '@/store/reducers/appViewSlice';

const initialState: AppViewState = {
  isDocDrawerOpen: false,
  isEditorAccordionOpen: false,
  activeEditorTab: 0,
};

const stateWithDrawerOpen: AppViewState = {
  isDocDrawerOpen: true,
  isEditorAccordionOpen: false,
  activeEditorTab: 0,
};

const stateWithAccordionOpen: AppViewState = {
  isDocDrawerOpen: false,
  isEditorAccordionOpen: true,
  activeEditorTab: 0,
};

const stateWithSecondTabActive: AppViewState = {
  isDocDrawerOpen: false,
  isEditorAccordionOpen: false,
  activeEditorTab: 1,
};

describe('appViewReducer should work correctly and:', () => {
  it('should return the initial state with undefined', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('toggleIsDocDrawerOpen should work correctly', () => {
    expect(reducer(initialState, toggleIsDocDrawerOpen(true))).toEqual(
      stateWithDrawerOpen,
    );
    expect(reducer(stateWithDrawerOpen, toggleIsDocDrawerOpen(false))).toEqual(
      initialState,
    );
  });

  it('toggleEditorAccordionOpen should work correctly', () => {
    expect(reducer(initialState, toggleEditorAccordionOpen())).toEqual(
      stateWithAccordionOpen,
    );
    expect(
      reducer(stateWithAccordionOpen, toggleEditorAccordionOpen()),
    ).toEqual(initialState);
  });

  it('setActiveEditorTab should work correctly', () => {
    expect(reducer(initialState, setActiveEditorTab(1))).toEqual(
      stateWithSecondTabActive,
    );
    expect(reducer(stateWithSecondTabActive, setActiveEditorTab(0))).toEqual(
      initialState,
    );
  });
});
