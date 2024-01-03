import { customRender } from '@/test/providers/customRender';
import CustomErrorPage from '@/pages/error';

describe('CustomErrorPage ', () => {
  it('should render correctly', () => {
    const { getByTestId, getAllByRole } = customRender(<CustomErrorPage />, {});

    expect(getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    expect(getAllByRole('heading')).toHaveLength(1);
    expect(getAllByRole('link')).toHaveLength(1);
    expect(getAllByRole('link')[0]).toHaveAttribute('href', '/');
  });
});
