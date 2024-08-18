/** @format */

import React from "react";
import { InstanceId, IStore, IterableType } from "@aitianyu.cn/tianyu-store";
import { IControlledElementProperty, IElementStorePorts } from "types/TianyuElement";
import { MessageBundle } from "infra/MessageBundle";

export abstract class StoreElement<
    STORE_INTERFACE extends IElementStorePorts,
    P extends IControlledElementProperty<STORE_INTERFACE>,
    S extends IterableType = {},
> extends React.Component<P, S> {
    private selfLoaded: boolean;
    private selfWorking: boolean;

    public constructor(prop: P) {
        super(prop);

        this.selfLoaded = false;
        this.selfWorking = false;
    }

    public get store(): IStore {
        return this.props.store;
    }
    public get parent(): InstanceId {
        return this.props.parentInstance;
    }
    public get id(): string {
        return this.props.id;
    }
    public get storeInterface(): STORE_INTERFACE | null {
        return this.props.ports ?? null;
    }
    public get storeType(): string {
        throw new Error(MessageBundle.getText("STORE_ELEMENT_STORE_TYPE_NOT_INITIALIZED"));
    }
    public get loaded(): boolean {
        return this.selfLoaded;
    }
    public get working(): boolean {
        return this.selfWorking;
    }

    protected setLoaded(): void {
        this.selfLoaded = true;
    }
    protected setUnload(): void {
        this.selfLoaded = false;
    }

    protected setWorking(): void {
        this.selfWorking = true;
    }
    protected setFree(): void {
        this.selfWorking = false;
    }

    public override forceUpdate(callback?: (() => void) | undefined): void {
        if (this.loaded) {
            super.forceUpdate(callback);
        }
    }
}
