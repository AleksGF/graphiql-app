import { customRender } from '@/test/providers/customRender';
import { Header } from '@/components';
import { stateWithUser } from '@/test/__mocks__/mockStore';

describe('Header should render correctly', () => {
  it('should render all elements', () => {
    const {
      getByAltText,
      getByRole,
      getAllByRole,
      getByTestId,
      queryByTestId,
    } = customRender(<Header />, {});

    expect(getByRole('link')).toHaveAttribute('href', '/');
    expect(getByAltText('Logo')).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(2);
    expect(getByTestId('DarkModeIcon')).toBeInTheDocument();
    expect(getByTestId('LanguageIcon')).toBeInTheDocument();
    expect(queryByTestId('LogoutIcon')).toBeNull();
    expect(queryByTestId('LightModeIcon')).toBeNull();
  });

  it('should render Logout button when user is logged in', async () => {
    const { getByTestId, getAllByRole } = customRender(<Header />, {
      preloadedState: stateWithUser,
    });

    expect(getAllByRole('button')).toHaveLength(3);
    expect(getByTestId('LogoutIcon')).toBeInTheDocument();
  });

  it('should render correct icon in dark mode', () => {
    const { getByTestId } = customRender(<Header />, {
      colorMode: 'dark',
    });

    expect(getByTestId('LightModeIcon')).toBeInTheDocument();
  });
});
