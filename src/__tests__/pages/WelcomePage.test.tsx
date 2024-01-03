import userEvent from '@testing-library/user-event';
import { customRender } from '@/test/providers/customRender';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import { stateWithUser } from '@/test/__mocks__/mockStore';
import { RoutePaths } from '@/routes/routes';

const mockNavigate = vi.fn();

describe('WelcomePage: ', () => {
  const user = userEvent.setup();

  beforeAll(() => {
    vi.mock('react-router-dom', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      useNavigate: () => mockNavigate,
    }));
  });

  beforeEach(() => {
    mockNavigate.mockRestore();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getAllByRole } = customRender(<WelcomePage />, {});

    expect(getAllByRole('heading')).toHaveLength(3);
    expect(getAllByRole('img')).toHaveLength(3);
    expect(getAllByRole('link')).toHaveLength(3);
  });

  it("should render 'Sign in' and 'Sign up' button without user", async () => {
    const { getAllByRole } = customRender(<WelcomePage />, {});

    expect(getAllByRole('group')).toHaveLength(1);

    const buttons = getAllByRole('button');

    expect(buttons).toHaveLength(2);
    expect(mockNavigate).not.toHaveBeenCalled();

    await user.click(buttons[0]);
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(RoutePaths.SignInPage);

    mockNavigate.mockRestore();
    expect(mockNavigate).not.toHaveBeenCalled();

    await user.click(buttons[1]);
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(RoutePaths.SignUpPage);
  });

  it("should render 'Main' button with user", async () => {
    const { getByRole } = customRender(<WelcomePage />, {
      preloadedState: stateWithUser,
    });

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();

    await user.click(button);
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(RoutePaths.MainPage);
  });
});
