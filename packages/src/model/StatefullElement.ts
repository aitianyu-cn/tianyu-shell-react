/** @format */

import { IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { StoreElement } from "./StoreElement";
import { ReactStatefullProperty } from "types/TianyuElement";
import { IterableType } from "@aitianyu.cn/tianyu-store";

export abstract class StatefullElement<P, S extends IReactState & IterableType> extends StoreElement<
    ReactStatefullProperty<P, S>,
    S
> {
    public constructor(prop: ReactStatefullProperty<P, S>, rawState: S) {
        super(prop, rawState);
    }
}
