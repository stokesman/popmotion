import { Middleware, ObserverCandidate, Update } from '../observer/types';
import { ActionInit, ActionProps, ColdSubscription } from './types';
import { Props, Predicate } from '../chainable/types';
export declare class Action {
  props: Props;
  constructor(props?: Props);
  create(props: ActionProps): Action;
  start(observerCandidate?: ObserverCandidate): ColdSubscription;
  applyMiddleware(middleware: Middleware): Action;
  pipe(...funcs: Update[]): Action;
  while(predicate: Predicate): Action;
}
declare const _default: (init: ActionInit) => Action;
export default _default;
