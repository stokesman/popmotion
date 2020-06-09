import { ObserverCandidate, ObserverProps, Update } from '../observer/types';
import { BaseMulticast } from './';
import { HotSubscription } from './types';
export declare type ValueMap = {
  [key: string]: number | string;
};
export declare type ValueList = Array<number | string>;
export declare type Value = number | string | ValueMap | ValueList;
export declare type ValueProps = ObserverProps & {
  value: Value;
  initialSubscription?: Update;
};
export declare class ValueReaction extends BaseMulticast<ValueReaction> {
  updateCurrent: (v: any) => any;
  getVelocityOfCurrent: () => any;
  private prev;
  private current;
  private timeDelta;
  private lastUpdated;
  private scheduleVelocityCheck;
  private velocityCheck;
  constructor(props: ValueProps);
  create(props: ValueProps): ValueReaction;
  get(): Value;
  getVelocity(): any;
  update(v: Value): void;
  subscribe(observerCandidate: ObserverCandidate): HotSubscription;
  private getSingleVelocity;
}
declare const _default: (
  value: Value,
  initialSubscription?: Update
) => ValueReaction;
export default _default;
