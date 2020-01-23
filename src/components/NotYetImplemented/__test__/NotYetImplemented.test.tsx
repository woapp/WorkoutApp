import React from 'react';
import { render } from 'react-native-testing-library';

import { NotYetImplemented } from '../NotYetImplemented';

describe('[Component] NotYetImplemented', () => {
  it('should render correctly', () => {
    const component = render(<NotYetImplemented />);
    expect(component).toMatchSnapshot();
  });
});