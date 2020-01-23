import React from 'react';
import { render } from 'react-native-testing-library';

import { Statistics } from '../Statistics';

describe('[Page] Statistics', () => {
  it('should render correctly', () => {
    const page = render(<Statistics />);
    expect(page).toMatchSnapshot();
  });
});