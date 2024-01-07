import { customRender } from '@/test/providers/customRender';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';

describe('SignInPage: ', () => {
  it('should render correctly', () => {
    const { getAllByRole, getByRole, getByTestId } = customRender(
      <SignUpPage />,
      {},
    );

    expect(getAllByRole('main')).toHaveLength(1);
    expect(getAllByRole('heading')).toHaveLength(1);
    expect(getAllByRole('progressbar')).toHaveLength(1);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('alert', { hidden: true })).toBeInTheDocument();
    expect(getByRole('alert', { hidden: true })).not.toBeVisible();
    expect(getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    expect(getByTestId('LockOutlinedIcon')).toBeInTheDocument();
  });
});
