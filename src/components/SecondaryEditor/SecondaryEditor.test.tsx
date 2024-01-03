import { fireEvent } from '@testing-library/dom';
import { customRender } from '@/test/providers/customRender';
import { SecondaryEditor } from '@/components';

const objWithCorrectValue = { key: 'value' };
const incorrectValue = 'error';

describe('SecondaryEditor: ', () => {
  beforeAll(() => {
    vi.mock('@uiw/react-codemirror', () => {
      return {
        default: ({ onChange }: { onChange: (value: string) => void }) => (
          <input
            type="text"
            onChange={(e) => {
              onChange(e.target.value);
            }}
            data-testid={'mockCodeMirror'}
          />
        ),
      };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should handle inputs', async () => {
    const mockSetValue = vi.fn();

    const { getByTestId } = customRender(
      <SecondaryEditor setValue={mockSetValue} />,
      {},
    );

    const inputField = getByTestId('mockCodeMirror');

    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, {
      target: { value: JSON.stringify(objWithCorrectValue) },
    });

    expect(mockSetValue.mock.calls).toHaveLength(1);
    expect(mockSetValue.mock.calls[0][0]).toEqual(objWithCorrectValue);

    fireEvent.change(inputField, {
      target: { value: incorrectValue },
    });

    expect(mockSetValue.mock.calls).toHaveLength(2);
    expect(mockSetValue.mock.calls[1][0]).toBeNull();
  });

  it('should render error message with incorrect input', () => {
    const { getByTestId, queryAllByRole } = customRender(
      <SecondaryEditor setValue={vi.fn()} />,
      {},
    );

    expect(queryAllByRole('tooltip')).toHaveLength(0);

    fireEvent.change(getByTestId('mockCodeMirror'), {
      target: { value: incorrectValue },
    });

    expect(queryAllByRole('tooltip')).toHaveLength(1);
  });
});
