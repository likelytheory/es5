import { RecoilState } from 'recoil';
/**
 * Creates a Recoil atom that's mapped from a specific path in Redux. This works like any other atom.
 */
declare const atomFromRedux: <ReturnType_1 = any>(path: string) => RecoilState<ReturnType_1>;
export { atomFromRedux };
