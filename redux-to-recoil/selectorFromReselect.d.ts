import { ReadOnlySelectorOptions, RecoilValueReadOnly } from 'recoil';
import { ReduxState } from './internals';
/**
 * Creates a Recoil selector from a Reselect selector
 */
declare const selectorFromReselect: <ReturnType_1 = any>(selectorFn: (reduxState: ReduxState) => ReturnType_1, extraSelectorOptions?: Partial<ReadOnlySelectorOptions<unknown>>) => RecoilValueReadOnly<ReturnType_1>;
export { selectorFromReselect };
