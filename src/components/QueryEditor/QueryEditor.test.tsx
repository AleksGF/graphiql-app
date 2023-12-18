import { customRender } from 'src/test/providers/customRender';
import { RoutePaths } from 'src/routes/routes';
import { QueryEditor } from '..';
import { logDOM } from '@testing-library/dom';

describe('QueryEditor should render correctly', () => {
  it('should render correctly', () => {
    customRender(<QueryEditor />, {
      route: RoutePaths.MainPage,
    });

    logDOM();
  });
});
