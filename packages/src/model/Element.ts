/**@format */

import { IReactState } from "./React";

export interface ITianyuElementSetStateAction<S extends IReactState> {
    newState: Pick<S, keyof S> | S;
}
