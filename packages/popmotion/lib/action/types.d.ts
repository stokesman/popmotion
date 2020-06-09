import { IObserver, ObserverProps } from '../observer/types';
export declare type ActionInit = (
  observer: IObserver
) => Partial<ColdSubscription> | void;
export interface ColdSubscription {
  stop: () => void;
  [key: string]: Function | undefined;
}
export declare type ActionProps = ObserverProps & {
  init: ActionInit;
};
