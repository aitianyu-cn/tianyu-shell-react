/** @format */

import { IInstanceSelector, IterableType, Unsubscribe } from "@aitianyu.cn/tianyu-store";
import { StoreElement } from "./StoreElement";
import { TIANYU_REACT_DEFAULT_STORE_TYPE } from "types/Contants";
import { ReactControlledProperty } from "types/TianyuElement";

export abstract class ControlledElement<P = {}, S extends IterableType = {}> extends StoreElement<ReactControlledProperty<P>, S> {
    private unsubscribeStateChangeCallback: Unsubscribe | undefined;

    public constructor(prop: ReactControlledProperty<P>, rawState: S) {
        super(prop, rawState);

        this.unsubscribeStateChangeCallback = undefined;
    }
    public get supportSubscribe(): boolean {
        return this.props.subscribeable === undefined ? true : this.props.subscribeable;
    }
    public override get storeType(): string {
        return TIANYU_REACT_DEFAULT_STORE_TYPE;
    }
    public onElementStateChange(_previousState: S): void {
        this.forceUpdate();
    }
    protected subscribeStateChange(selector: IInstanceSelector<S>): void {
        if (!this.supportSubscribe) {
            return;
        }
        this.unsubscribeStateChangeCallback = this.store.subscribe(selector, this.onStateChange.bind(this));
    }
    protected unsubscribeStateChange(): void {
        this.unsubscribeStateChangeCallback?.();
    }

    private onStateChange(_previousState: S | undefined, currentState: S | undefined): void {
        if (currentState) {
            this.setState(currentState);
        }
    }
}
