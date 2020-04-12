import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

type ExerciseItemProps = {
  isFirst?: boolean;
  isLast?: boolean;
};

export const ExerciseItem: FunctionComponent<ExerciseItemProps> = observer(() => {
  return null;
});
