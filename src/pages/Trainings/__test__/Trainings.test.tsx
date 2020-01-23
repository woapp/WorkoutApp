import React from 'react';
import { render } from 'react-native-testing-library';

import { Trainings } from '../Trainings';

describe('[Page] Trainings', () => {
  it('should render correctly', () => {
    const page = render(<Trainings />);
    expect(page).toMatchSnapshot();
  });
});