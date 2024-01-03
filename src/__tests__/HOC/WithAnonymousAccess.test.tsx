import { customRender } from '@/test/providers/customRender';
import WithAnonymousAccess from '@/HOC/WithAnonymousAccess';
import { stateWithUser } from '@/test/__mocks__/mockStore';
import { RoutePaths } from '@/routes/routes';

const child = <div>Child</div>;

describe('WithAnonymousAccess: ', () => {
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
      <WithAnonymousAccess>{child}</WithAnonymousAccess>,
      {},
    );

    expect(getByText('Child')).toBeInTheDocument();
    expect(queryByTestId('navigate')).toBeNull();
  });

  it('should render Navigate', () => {
    const { queryByText, getByTestId } = customRender(
      <WithAnonymousAccess>{child}</WithAnonymousAccess>,
      { preloadedState: stateWithUser },
    );

    expect(queryByText('Child')).toBeNull();
    expect(getByTestId('navigate')).toBeInTheDocument();
    expect(getByTestId('navigate')).toHaveTextContent(RoutePaths.MainPage);
  });
});
