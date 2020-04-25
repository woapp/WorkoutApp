import { MuscleGroup } from '@woap/mobx/types';
export { BodyVisualisation } from './BodyVisualisation';

export interface Ratios {
  [MuscleGroup.Trapezius]?: number;
  [MuscleGroup.Shoulders]?: number;
  [MuscleGroup.Biceps]?: number;
  [MuscleGroup.Triceps]?: number;
  [MuscleGroup.Forearms]?: number;
  [MuscleGroup.Chest]?: number;
  [MuscleGroup.Back]?: number;
  [MuscleGroup.Lombar]?: number;
  [MuscleGroup.Abs]?: number;
  [MuscleGroup.Obliques]?: number;
  [MuscleGroup.Buttock]?: number;
  [MuscleGroup.Adductors]?: number;
  [MuscleGroup.Quadriceps]?: number;
  [MuscleGroup.Ischios]?: number;
  [MuscleGroup.Calves]?: number;
}

export interface OnPressMuscles {
  [MuscleGroup.Shoulders]?: () => void;
  [MuscleGroup.Biceps]?: () => void;
  [MuscleGroup.Triceps]?: () => void;
  [MuscleGroup.Forearms]?: () => void;
  [MuscleGroup.Chest]?: () => void;
  [MuscleGroup.Back]?: () => void;
  [MuscleGroup.Lombar]?: () => void;
  [MuscleGroup.Abs]?: () => void;
  [MuscleGroup.Obliques]?: () => void;
  [MuscleGroup.Buttock]?: () => void;
  [MuscleGroup.Adductors]?: () => void;
  [MuscleGroup.Quadriceps]?: () => void;
  [MuscleGroup.Ischios]?: () => void;
  [MuscleGroup.Calves]?: () => void;
}
