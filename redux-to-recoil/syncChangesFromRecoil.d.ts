import { Reducer } from 'redux';
/**
 * Redux Reducer which processes `SYNC_CHANGES_FROM_RECOIL` actions.
 * This lets you write changes from Recoil back to Redux (when the `writeEnabled` option is turned on)
 */
declare const syncChangesFromRecoil: (rootReducer: Reducer) => Reducer;
export { syncChangesFromRecoil };
