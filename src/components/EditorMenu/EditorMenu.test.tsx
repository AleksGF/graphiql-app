import { customRender } from '@/test/providers/customRender';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { EditorMenu } from '@/components';

const iconButtons = [
  'MenuBookIcon',
  'CleaningServicesIcon',
  'PlayCircleOutlineIcon',
];

describe('EditorMenu: ', () => {
  const user = userEvent.setup();

  it('should render all button icons', () => {
    const { getByTestId } = customRender(<EditorMenu />, {});

    iconButtons.forEach((testId) => {
      expect(getByTestId(testId)).toBeInTheDocument();
    });
  });

  it('should show and hide tooltips', async () => {
    const { getByTestId, getByRole, queryAllByRole } = customRender(
      <EditorMenu />,
      {},
    );

    for await (const testId of iconButtons) {
      expect(queryAllByRole('tooltip')).toHaveLength(0);

      await user.hover(getByTestId(testId));

      await waitFor(() => {
        expect(getByRole('tooltip')).toBeVisible();
      });

      await user.unhover(getByTestId(testId));

      await waitFor(() => {
        expect(queryAllByRole('tooltip')).toHaveLength(0);
      });
    }
  });
});
