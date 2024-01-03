import userEvent from '@testing-library/user-event';
import { customRender } from '@/test/providers/customRender';
import MainPage from '@/pages/MainPage/MainPage';

describe('Main Page: ', () => {
  const user = userEvent.setup();

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

  it('should show and hide documentation', async () => {
    const { getByTestId, queryByTestId } = customRender(<MainPage />, {});

    const btn = getByTestId('ShowDoc');
    expect(btn).toBeInTheDocument();
    expect(queryByTestId('DocDrawer')).toBeNull();

    await user.click(btn);

    expect(getByTestId('DocDrawer')).toBeInTheDocument();
    expect(getByTestId('DocDrawer')).toBeVisible();
    expect(getByTestId('DocDrawer')).not.toHaveAttribute('aria-hidden', 'true');

    const closeBtn = getByTestId('CloseDocDrawer');
    expect(closeBtn).toBeInTheDocument();

    await user.click(closeBtn);

    expect(getByTestId('DocDrawer')).toHaveAttribute('aria-hidden', 'true');
  });
});
