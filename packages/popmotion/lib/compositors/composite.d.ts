import { Action } from '../action';
declare type ActionMap = {
  [key: string]: Action;
};
declare const composite: (actions: ActionMap) => Action;
export default composite;
