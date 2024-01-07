import { customRender } from '@/test/providers/customRender';
import WithAuthorizedAccess from '@/HOC/WithAuthorizedAccess';
import { stateWithUser } from '@/test/__mocks__/mockStore';
import { RoutePaths } from '@/routes/routes';

const child = <div>Child</div>;

describe('WithAuthorizedAccess: ', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async (importOriginal) => ({
      ...((await importOriginal()) as object),
      Navigate: ({ to }: { to: string }) => (
        <div data-testid="navigate">{to}</div>
      ),
    }));
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should render child when not authorized', () => {
    const { getByText, queryByTestId } = customRender(
      <WithAuthorizedAccess>{child}</WithAuthorizedAccess>,
      { preloadedState: stateWithUser },
    );

    expect(getByText('Child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });

  it('should render Navigate', () => {
    const { queryByText, getByTestId } = customRender(
      <WithAuthorizedAccess>{child}</WithAuthorizedAccess>,
      {},
    );

    expect(queryByText('Child')).toBeNull();
    expect(getByTestId('navigate')).toBeInTheDocument();
    expect(getByTestId('navigate')).toHaveTextContent(RoutePaths.IndexPage);
  });
});
