import { customRender } from '@/test/providers/customRender';
import Custom404Page from '@/pages/404';

describe('Custom404Page ', () => {
  it('should render correctly', () => {
    const { getByTestId, getAllByRole } = customRender(<Custom404Page />, {});

    expect(getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    expect(getAllByRole('heading')).toHaveLength(1);
    expect(getAllByRole('link')).toHaveLength(1);
    expect(getAllByRole('link')[0]).toHaveAttribute('href', '/');
  });
});
