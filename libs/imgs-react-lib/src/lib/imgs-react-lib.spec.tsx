import { render } from '@testing-library/react';

import ImgsReactLib from './imgs-react-lib';

describe('ImgsReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImgsReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
