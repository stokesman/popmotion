import {
  applyOffset,
  clamp,
  conditional,
  interpolate,
  mixArray,
  mixColor,
  pipe,
  smooth,
  snap,
  springForce,
  springForceExpo,
  springForceLinear,
  wrap
} from '@popmotion/popcorn';
export {
  applyOffset,
  clamp,
  conditional,
  interpolate,
  mixArray as blendArray,
  mixColor as blendColor,
  pipe,
  smooth,
  snap,
  springForce as generateStaticSpring,
  springForceExpo as nonlinearSpring,
  springForceLinear as linearSpring,
  wrap
};
export declare const appendUnit: (unit: string) => (v: number) => string;
export declare const steps: (
  st: number,
  min?: number,
  max?: number
) => (v: number) => number;
export declare const transformMap: (childTransformers: {
  [key: string]: Function;
}) => (
  v: any
) => {
  [key: string]: any;
};
