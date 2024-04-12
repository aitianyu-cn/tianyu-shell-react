/**@format */

import { ActionCreator, Dispatcher, IActionDispatch, IStore, Reducer, StoreUtils, createStore } from "@aitianyu.cn/tianyu-store";
import { guid } from "@aitianyu.cn/types";
import { ITianyuElementSetStateAction } from "model/Element";
import { IReactProperty, IReactState } from "model/React";
import React from "react";

export class TianyuElement<P extends IReactProperty, S extends IReactState> extends React.Component<P, S> {
    private SET_STATE_ACTION = ActionCreator.create<ITianyuElementSetStateAction<S>>("setState", true);

    private store: IStore<S>;
    private instanceId: string;

    public constructor(props: P, state: S) {
        super(props);

        this.instanceId = guid();
        this.store = createStore<S>(state);
        this.store.withReducer(
            new Map([
                [
                    "setState",
                    function (this: IActionDispatch<S>, state: Readonly<S>, params: ITianyuElementSetStateAction<S>): Promise<S> {
                        return StoreUtils.mergeState(state, params.newState);
                    },
                ],
            ]),
        );
    }

    // ################################################################################
    // Public Export Methods
    // ################################################################################

    public getInstanceId(): string {
        return this.instanceId;
    }

    /**
     * To set a new state into element
     *
     * @deprecated Tianyu Store is used in Tianyu Shell Element, setState should not be used directly
     *
     * @param state new state object or a function to get new state
     * @param callback set state callback after the setState is done
     */
    public override setState(
        state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, keyof S> | S | null) | (Pick<S, keyof S> | S | null),
        callback?: () => void,
    ): void {
        const newState = typeof state === "function" ? state(this.store.getState(), this.props) : state;
        if (newState) {
            this.store.doDispatch(Dispatcher.createDispatcher(this.SET_STATE_ACTION({ newState: newState })));
        }
        callback?.();
    }

    // ################################################################################
    // Internal used Methods
    // ################################################################################

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected withReducer(reducerMap: Map<string, Reducer<S, any>>): void {
        this.store.withReducer(reducerMap);
    }

    protected getState(): S {
        return this.store.getState();
    }
}
