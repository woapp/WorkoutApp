import React from 'react';
import { render } from 'react-native-testing-library';

import { Watch } from '../Watch';

describe('[Page] Watch', () => {
  it('should render correctly', () => {
    const page = render(<Watch />);
    expect(page).toMatchSnapshot();
  });
});