import { ChangeEntry } from './types';
declare const SYNC_CHANGES_FROM_RECOIL = "SYNC_CHANGES_FROM_RECOIL";
export interface SyncFromRecoilAction {
    type: typeof SYNC_CHANGES_FROM_RECOIL;
    payload: Array<ChangeEntry>;
}
declare const syncChangesFromRecoilAction: (changes: Array<ChangeEntry>) => SyncFromRecoilAction;
export { SYNC_CHANGES_FROM_RECOIL, syncChangesFromRecoilAction };
