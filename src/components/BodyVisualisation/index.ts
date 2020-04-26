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
  [MuscleGroup.Lumbar]?: number;
  [MuscleGroup.Abs]?: number;
  [MuscleGroup.Obliques]?: number;
  [MuscleGroup.Buttocks]?: number;
  [MuscleGroup.Adductors]?: number;
  [MuscleGroup.Quadriceps]?: number;
  [MuscleGroup.Hamstring]?: number;
  [MuscleGroup.Calves]?: number;
}

export interface OnPressMuscles {
  [MuscleGroup.Trapezius]?: () => void;
  [MuscleGroup.Shoulders]?: () => void;
  [MuscleGroup.Biceps]?: () => void;
  [MuscleGroup.Triceps]?: () => void;
  [MuscleGroup.Forearms]?: () => void;
  [MuscleGroup.Chest]?: () => void;
  [MuscleGroup.Back]?: () => void;
  [MuscleGroup.Lumbar]?: () => void;
  [MuscleGroup.Abs]?: () => void;
  [MuscleGroup.Obliques]?: () => void;
  [MuscleGroup.Buttocks]?: () => void;
  [MuscleGroup.Adductors]?: () => void;
  [MuscleGroup.Quadriceps]?: () => void;
  [MuscleGroup.Hamstring]?: () => void;
  [MuscleGroup.Calves]?: () => void;
}
