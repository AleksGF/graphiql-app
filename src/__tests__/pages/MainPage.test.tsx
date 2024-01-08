import { customRender } from '@/test/providers/customRender';
import MainPage from '@/pages/MainPage/MainPage';

describe('Main Page: ', () => {
  beforeAll(() => {
    vi.mock('@uiw/react-codemirror', () => {
      return {
        default: () => <div>CodeMirror</div>,
      };
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should render all components', () => {
    const { getByTestId, getByRole } = customRender(<MainPage />, {});

    expect(getByRole('main')).toBeInTheDocument();
    expect(getByTestId('EditorMenu')).toBeInTheDocument();
    expect(getByTestId('EndpointEditor')).toBeInTheDocument();
    expect(getByTestId('QueryEditor')).toBeInTheDocument();
    expect(getByTestId('ResponseViewer')).toBeInTheDocument();
    expect(getByTestId('EditorAccordion')).toBeInTheDocument();
  });

  it('should render 3 instance of CodeMirror', () => {
    const { getAllByText } = customRender(<MainPage />, {});

    expect(getAllByText('CodeMirror')).toHaveLength(3);
  });
});
