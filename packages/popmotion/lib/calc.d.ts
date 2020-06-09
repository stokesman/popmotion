import {
  angle,
  degreesToRadians,
  distance,
  isPoint3D,
  isPoint,
  mix,
  pointFromVector,
  progress,
  radiansToDegrees,
  smoothFrame,
  velocityPerFrame,
  velocityPerSecond
} from '@popmotion/popcorn';
export {
  angle,
  degreesToRadians,
  distance,
  isPoint3D,
  isPoint,
  mix as dilate,
  mix as getValueFromProgress,
  pointFromVector as pointFromAngleAndDistance,
  progress as getProgressFromValue,
  radiansToDegrees,
  smoothFrame as smooth,
  velocityPerFrame as speedPerFrame,
  velocityPerSecond as speedPerSecond
};
export declare const stepProgress: (steps: number, progress: number) => number;
