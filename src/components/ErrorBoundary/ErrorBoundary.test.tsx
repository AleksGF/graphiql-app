import { customRender } from '@/test/providers/customRender';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { Langs, LANGUAGES } from '@/constants/dictionaries';

const language = Langs.EN;
const ChildWithoutError = () => <div>Test</div>;
const ChildWithError = () => {
  throw new Error();

  return <div>Test</div>;
};

describe('Error Boundary: ', () => {
  beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation(() => null);
    vi.mock('@/utils/getDefaultLanguage', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      getDefaultLanguage: () => language,
    }));
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should render child element without error', () => {
    const { getByText, queryByText } = customRender(
      <ErrorBoundary>
        <ChildWithoutError />
      </ErrorBoundary>,
      {},
    );

    expect(getByText('Test')).toBeInTheDocument();
    expect(queryByText(LANGUAGES[language].ERROR_MESSAGE)).toBeNull();
  });

  it('should render error message when error', () => {
    const { getByText, getByRole, queryByText } = customRender(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>,
      {},
    );

    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText(LANGUAGES[language].ERROR_MESSAGE)).toBeInTheDocument();
    expect(queryByText('Test')).toBeNull();
  });
});
