import { RecoilState } from 'recoil';
import { ReduxState } from './types';
/**
 * The entire redux state is stored in an atom, which keys are then selected from.
 * This returns that atom.
 */
declare const getReduxStateAtom: () => RecoilState<ReduxState>;
export { getReduxStateAtom };
