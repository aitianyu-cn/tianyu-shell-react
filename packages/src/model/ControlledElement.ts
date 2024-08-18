/** @format */

import { IInstanceSelector, IterableType, Unsubscribe } from "@aitianyu.cn/tianyu-store";
import { StoreElement } from "./StoreElement";
import { TIANYU_REACT_DEFAULT_STORE_TYPE } from "types/Contants";
import { IControlledElementProperty, IElementStorePorts, ReactControlledProperty } from "types/TianyuElement";

export abstract class ControlledElement<
    STORE_INTERFACE extends IElementStorePorts,
    P = {},
    S extends IterableType = {},
> extends StoreElement<STORE_INTERFACE, ReactControlledProperty<STORE_INTERFACE, P>> {
    private selfState: S;
    private unsubscribeStateChange: Unsubscribe | undefined;

    public constructor(prop: ReactControlledProperty<STORE_INTERFACE, P>, rawState: S) {
        super(prop);

        this.selfState = rawState;
        this.unsubscribeStateChange = undefined;
    }

    public get getState(): Readonly<S> {
        return this.selfState;
    }

    public override get storeType(): string {
        return TIANYU_REACT_DEFAULT_STORE_TYPE;
    }
    public override setState(state: S): void {
        const previousState = this.selfState;
        this.selfState = state;

        const shouldUpdate = this.elementShouldUpdate(previousState, state);
        if (shouldUpdate) {
            this.onElementStateChange(previousState);
        }
    }

    public elementShouldUpdate(_previousState: S, _currentState: S): boolean {
        return true;
    }
    public onElementStateChange(_previousState: S): void {
        this.forceUpdate();
    }
    protected toSubscribeStateChange(selector: IInstanceSelector<S>): void {
        this.unsubscribeStateChange = this.store.subscribe(selector, this.onStateChange.bind(this));
    }
    protected toUnsubscribeStateChange(): void {
        this.unsubscribeStateChange?.();
    }

    private onStateChange(_previousState: S | undefined, currentState: S | undefined): void {
        if (currentState) {
            this.setState(currentState);
        }
    }
}
