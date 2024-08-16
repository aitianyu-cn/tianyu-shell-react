/** @format */

// import { Components } from "index";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { ITianyuUIProperty, ReactElement } from "@aitianyu.cn/tianyu-shell/react";
import { ActionFactor, SelectorFactor } from "@aitianyu.cn/tianyu-store";
import React from "react";
import ReactDOM from "react-dom/client";

const InterfaceExpose = {
    setTime: ActionFactor.makeActionCreator<{
        time: number;
    }>().withReducer(function () {
        return {
            time: Date.now(),
        };
    }),
    getTime: SelectorFactor.makeSelector<
        {
            time: number;
        },
        number
    >(function (state) {
        return state.time;
    }),
};

export class Element extends ReactElement<
    ITianyuUIProperty,
    {
        time: number;
    }
> {
    private timer: number;

    public constructor(
        props: ITianyuUIProperty & {
            state: {
                time: number;
            };
        },
    ) {
        super(props);

        this.registInterface(InterfaceExpose);

        this.timer = 0;
    }

    protected renderUI() {
        const time = this.store.selecteWithThrow(InterfaceExpose.getTime(this.instanceId));
        const dateTime = new Date(time);
        return <div>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</div>;
    }

    protected getStoreType(): string {
        return "test-element";
    }

    protected onAfterLoaded(): void {
        this.timer = window.setInterval(() => {
            this.store.dispatch(InterfaceExpose.setTime(this.instanceId));
        }, 1000);
    }

    protected onBeforeUnloaded(): void {
        if (this.timer) {
            window.clearInterval(this.timer);
        }
    }
}

export function App(div: HTMLElement): void {
    const root = ReactDOM.createRoot(div);
    // const instanceId = Components.Control.InstanceId.createSelector();
    root.render(
        <div style={{ width: "100%", height: "100%", backgroundColor: "#AAAAAA" }}>
            <Element
                store={TianyuShellStore.getStore()}
                parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                id="test_element"
                state={{ time: Date.now() }}
            />
        </div>,
    );
}
