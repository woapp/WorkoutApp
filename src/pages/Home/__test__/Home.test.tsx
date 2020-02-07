import React from 'react';
import { render } from 'react-native-testing-library';

import { Home } from '../Home';

describe('[Page] Home', () => {
  it('should render correctly', () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });
});
