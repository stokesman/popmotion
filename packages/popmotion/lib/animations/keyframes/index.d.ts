import { Action } from '../../action';
import { KeyframesProps } from './types';
declare const keyframes: ({
  easings,
  ease,
  times,
  values,
  ...tweenProps
}: KeyframesProps) => Action;
export default keyframes;
