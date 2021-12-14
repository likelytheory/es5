import { ChangeEntry, ReduxState } from './types';
declare const applyChangesToObject: (state: ReduxState, changes: Array<ChangeEntry>) => ReduxState;
export { applyChangesToObject };
