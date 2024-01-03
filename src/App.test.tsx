import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import App from '@/App';

describe('Renders correctly: ', () => {
  test('Header, Main and Footer', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByRole('banner')).toBeInTheDocument();
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
