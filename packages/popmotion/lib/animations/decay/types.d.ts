export declare type ModifyTarget = (v: number) => number;
export declare type DecayProps = {
  velocity?: number;
  from?: number;
  modifyTarget?: ModifyTarget;
  power?: number;
  timeConstant?: number;
  restDelta?: number;
};
