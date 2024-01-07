import userEvent from '@testing-library/user-event';
import { customRender } from '@/test/providers/customRender';
import { EditorAccordion } from '@/components';
import {
  stateWithOpenAccordion,
  stateWithOpenSecondTab,
} from '@/test/__mocks__/mockStore';

describe('EditorAccordion: ', () => {
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

  it('should render correctly', () => {
    const { getAllByRole, getByTestId } = customRender(<EditorAccordion />, {});

    expect(getAllByRole('tab')).toHaveLength(2);
    expect(getAllByRole('tabpanel', { hidden: true })).toHaveLength(2);
    expect(getByTestId('ExpandMoreIcon')).toBeInTheDocument();
  });

  it('should open and close by click', async () => {
    const { getByText, getByTestId } = customRender(<EditorAccordion />, {});

    const btn = getByTestId('ExpandMoreIcon');
    expect(getByText('CodeMirror')).not.toBeVisible();

    await user.click(btn);
    expect(getByText('CodeMirror')).toBeVisible();

    await user.click(btn);
    expect(getByText('CodeMirror')).not.toBeVisible();
  });

  it('should handle panel change', async () => {
    const { getByText, getAllByRole } = customRender(<EditorAccordion />, {
      preloadedState: stateWithOpenAccordion,
    });

    expect(getByText('CodeMirror')).toBeVisible();

    const tabHeaders = getAllByRole('tab');
    expect(tabHeaders).toHaveLength(2);

    const tabPanels = getAllByRole('tabpanel', { hidden: true });
    expect(tabPanels).toHaveLength(2);
    expect(tabPanels[0]).toBeVisible();
    expect(tabPanels[1]).not.toBeVisible();
    expect(tabPanels[0]).not.toHaveAttribute('hidden');
    expect(tabPanels[1]).toHaveAttribute('hidden');

    await user.click(tabHeaders[1]);

    expect(tabPanels[1]).toBeVisible();
    expect(tabPanels[0]).not.toBeVisible();
    expect(tabPanels[1]).not.toHaveAttribute('hidden');
    expect(tabPanels[0]).toHaveAttribute('hidden');

    await user.click(tabHeaders[0]);

    expect(tabPanels[0]).toBeVisible();
    expect(tabPanels[1]).not.toBeVisible();
    expect(tabPanels[0]).not.toHaveAttribute('hidden');
    expect(tabPanels[1]).toHaveAttribute('hidden');
  });

  it('should depends on state', () => {
    const { getByText, getAllByRole } = customRender(<EditorAccordion />, {
      preloadedState: stateWithOpenSecondTab,
    });

    expect(getByText('CodeMirror')).toBeVisible();

    const tabPanels = getAllByRole('tabpanel', { hidden: true });
    expect(tabPanels[1]).toBeVisible();
    expect(tabPanels[0]).not.toBeVisible();
    expect(tabPanels[1]).not.toHaveAttribute('hidden');
    expect(tabPanels[0]).toHaveAttribute('hidden');
  });
});
