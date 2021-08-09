import { render } from '@testing-library/react';

import Imgs from './imgs';

describe('Imgs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Imgs />);
    expect(baseElement).toBeTruthy();
  });
});
