/** @format */

import React from "react";
import { InstanceId, IStore, IterableType } from "@aitianyu.cn/tianyu-store";
import { IControlledElementProperty } from "types/TianyuElement";
import { MessageBundle } from "infra/MessageBundle";

export abstract class StoreElement<P extends IControlledElementProperty, S extends IterableType = {}> extends React.Component<
    P,
    S
> {
    private selfLoaded: boolean;
    private selfWorking: boolean;
    private selfState: S;

    public constructor(prop: P, rawState: S) {
        super(prop);

        this.selfLoaded = false;
        this.selfWorking = false;
        this.selfState = rawState;
    }

    public get store(): IStore {
        return this.props.store;
    }
    public get parent(): InstanceId {
        return this.props.parentInstance;
    }
    public get instanceId(): InstanceId {
        return this.props.instanceId;
    }
    public get getState(): Readonly<S> {
        return this.selfState;
    }

    public get id(): string {
        return this.props.id;
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

    public override componentDidMount(): void {
        this.setLoaded();
        this.elementAfterLoaded();
    }
    public override componentWillUnmount(): void {
        this.elementBeforeUnload();
        this.setUnload();
    }
    public override setState(state: S): void {
        const previousState = this.selfState;
        this.selfState = state;

        const shouldUpdate = this.elementShouldUpdate(previousState, state);
        if (shouldUpdate) {
            this.elementStateChanged(previousState);
        }
    }

    public override forceUpdate(callback?: (() => void) | undefined): void {
        if (this.loaded) {
            super.forceUpdate(callback);
        }
    }

    /**
     * @virtual
     *
     * @param _previousState
     * @param _currentState
     * @returns
     */
    public elementShouldUpdate(_previousState: S, _currentState: S): boolean {
        return true;
    }
    /**
     * @virtual
     *
     * @param _previousState
     */
    public elementStateChanged(_previousState: S): void {
        this.forceUpdate();
    }

    /**
     * @virtual
     */
    protected elementAfterLoaded(): void {}
    /**
     * @virtual
     */
    protected elementBeforeUnload(): void {}

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
}
