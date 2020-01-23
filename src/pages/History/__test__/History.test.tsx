import React from 'react';
import { render } from 'react-native-testing-library';

import { History } from '../History';

describe('[Page] History', () => {
  it('should render correctly', () => {
    const page = render(<History />);
    expect(page).toMatchSnapshot();
  });
});