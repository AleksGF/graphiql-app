import { customRender } from '@/test/providers/customRender';
import Footer from '@/components/Footer/Footer';

describe('Footer should render correctly', () => {
  it('should render all elements', () => {
    const { getByText, getAllByRole, getAllByTestId } = customRender(
      <Footer />,
      {},
    );

    expect(getAllByRole('link')).toHaveLength(4);
    expect(getAllByTestId('GitHubIcon')).toHaveLength(3);
    expect(getByText('2023 Lazy Uploads RS School Team')).toBeInTheDocument();
  });

  it('should have dark logo with default theme', () => {
    const { getByTestId, queryByTestId } = customRender(<Footer />, {});

    expect(getByTestId('rslogo_dark')).toBeInTheDocument();
    expect(queryByTestId('rslogo_light')).toBeNull();
  });

  it('should have light logo with dark theme', () => {
    const { getByTestId, queryByTestId } = customRender(<Footer />, {
      colorMode: 'dark',
    });

    expect(getByTestId('rslogo_light')).toBeInTheDocument();
    expect(queryByTestId('rslogo_dark')).toBeNull();
  });
});
