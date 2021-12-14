import React from 'react';
import { ReduxToRecoilOptions } from './options';
export declare type SyncReduxToRecoilProps = Partial<ReduxToRecoilOptions>;
/**
 * Core, required component for syncing changes from Redux to Recoil, and vice versa.
 *
 * This should be rendered within _both_ the Redux and Recoil providers. Do not wrap this around the rest of your app.
 */
declare const SyncReduxToRecoil: React.FC<SyncReduxToRecoilProps>;
export { SyncReduxToRecoil };
