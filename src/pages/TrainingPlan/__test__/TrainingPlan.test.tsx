import React from 'react';
import { render } from 'react-native-testing-library';

import { TrainingPlan } from '../TrainingPlan';

describe('[Page] TrainingPlan', () => {
  it('should render correctly', () => {
    const page = render(<TrainingPlan />);
    expect(page).toMatchSnapshot();
  });
});