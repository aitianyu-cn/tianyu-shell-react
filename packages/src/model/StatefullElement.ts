/** @format */

import { guid } from "@aitianyu.cn/types";
import { IReactState } from "@aitianyu.cn/tianyu-shell/react";
import { StoreElement } from "./StoreElement";
import { IElementStorePorts, ReactStatefullProperty } from "types/TianyuElement";
import { IInstanceSelector, InstanceId, Missing, StoreHelper } from "@aitianyu.cn/tianyu-store";

export abstract class StatefullElement<S extends IReactState, P, STORE_INTERFACE extends IElementStorePorts> extends StoreElement<
    STORE_INTERFACE,
    ReactStatefullProperty<STORE_INTERFACE, P, S>,
    S
> {
    private readonly selfInstanceId: InstanceId;
    private readonly selfId: string;

    public constructor(prop: ReactStatefullProperty<STORE_INTERFACE, P, S>) {
        super(prop);

        this.selfId = this.props.id || guid();
        this.selfInstanceId = StoreHelper.generateInstanceId(this.parent, this.storeType, this.id);
    }

    public get instance(): InstanceId {
        return this.selfInstanceId;
    }
    public override get id(): string {
        return this.selfId;
    }

    public getState<T>(selector: IInstanceSelector<T>): T | null {
        const result = this.store.selecte(selector);
        return result instanceof Missing ? null : result;
    }
}
