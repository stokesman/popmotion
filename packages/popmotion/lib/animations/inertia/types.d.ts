export declare type Props = {
  from: number;
  velocity: number;
  min?: number;
  max?: number;
  bounceStiffness: number;
  bounceDamping: number;
  power: number;
  timeConstant: number;
  restDelta: number;
  modifyTarget: (v: number) => number;
};
export declare type SpringProps = {
  to: number;
  from: number;
  velocity: number;
};
