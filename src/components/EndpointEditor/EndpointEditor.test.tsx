import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { customRender } from '@/test/providers/customRender';
import { EndpointEditor } from '@/components';
import {
  initialState,
  stateWithEditEndpoint,
  stateWithEndpointError,
} from '@/test/__mocks__/mockStore';

describe('EndpointEditor: ', () => {
  const user = userEvent.setup();

  it('should render correctly in view mode', () => {
    const { getByTestId, getByRole } = customRender(<EndpointEditor />, {});

    expect(getByRole('textbox')).toHaveAttribute(
      'value',
      initialState.apiEndpoint.apiUrl,
    );
    expect(getByTestId('EditIcon')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should show tooltip for buttons in view mode', async () => {
    const { getByTestId, getByRole, queryAllByRole } = customRender(
      <EndpointEditor />,
      {},
    );

    const icon = getByTestId('EditIcon');

    expect(queryAllByRole('tooltip')).toHaveLength(0);

    await user.hover(icon);

    await waitFor(() => {
      expect(getByRole('tooltip')).toBeVisible();
      expect(queryAllByRole('tooltip')).toHaveLength(1);
    });
  });

  it('should render correctly in edit mode', () => {
    const { getByTestId, getByRole, getAllByRole } = customRender(
      <EndpointEditor />,
      { preloadedState: stateWithEditEndpoint },
    );

    expect(getByRole('textbox')).toHaveAttribute(
      'value',
      stateWithEditEndpoint.endpointEditor.newEndpointCurrentInput,
    );
    expect(getByTestId('ClearIcon')).toBeInTheDocument();
    expect(getByTestId('DoneIcon')).toBeInTheDocument();
    expect(getAllByRole('button')).toHaveLength(2);
  });

  it('should show tooltip for buttons in edit mode', async () => {
    const { getByTestId, getByRole, queryAllByRole } = customRender(
      <EndpointEditor />,
      { preloadedState: stateWithEditEndpoint },
    );

    const clearIcon = getByTestId('ClearIcon');
    const doneIcon = getByTestId('DoneIcon');

    expect(queryAllByRole('tooltip')).toHaveLength(0);

    await user.hover(clearIcon);

    await waitFor(() => {
      expect(getByRole('tooltip')).toBeVisible();
      expect(queryAllByRole('tooltip')).toHaveLength(1);
    });

    await user.unhover(clearIcon);

    await waitFor(() => {
      expect(queryAllByRole('tooltip')).toHaveLength(0);
    });

    await user.hover(doneIcon);

    await waitFor(() => {
      expect(getByRole('tooltip')).toBeVisible();
      expect(queryAllByRole('tooltip')).toHaveLength(1);
    });
  });

  it('should show error message', () => {
    const { getByRole, getByTestId } = customRender(<EndpointEditor />, {
      preloadedState: stateWithEndpointError,
    });

    expect(getByRole('presentation')).toBeInTheDocument();
    expect(getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
    expect(getByTestId('CloseIcon')).toBeInTheDocument();
  });

  it('should handle input text', async () => {
    const { getByTestId, getByRole, getAllByRole } = customRender(
      <EndpointEditor />,
      {},
    );

    const editIcon = getByTestId('EditIcon');
    expect(editIcon).toBeInTheDocument();

    await user.click(editIcon);

    const inputElement = getByRole('textbox') as HTMLInputElement;

    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[1]).toHaveAttribute('disabled');
    expect(inputElement.value).toBe('');

    await user.type(
      inputElement,
      stateWithEditEndpoint.endpointEditor.newEndpointCurrentInput,
    );

    expect(buttons[1]).not.toHaveAttribute('disabled');
    expect(inputElement.value).toBe(
      stateWithEditEndpoint.endpointEditor.newEndpointCurrentInput,
    );

    await user.click(getByTestId('ClearIcon'));

    expect(getByTestId('EditIcon')).toBeInTheDocument();
  });
});
