/** @format */

import React from "react";
import { guid } from "@aitianyu.cn/types";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { IInstanceAction, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { getInstanceId } from "script/store/Instance";
import { StoreInterfaceExpose } from "script/store/InterfaceExpose";
import { INormalButtonState, IToggleButtonState } from "script/store/StoreState";
import { TianyuReact } from "tianyu-shell-react";

function getToggleButtonInterface(
    enable: boolean,
    selected: boolean,
    text: string,
): {
    id: string;
    state: IToggleButtonState;
} {
    const id = guid();
    return {
        id,
        state: {
            enable,
            selected,
            text,
        },
    };
}

function getNormalButtonInterface(
    enable: boolean,
    count: number,
): {
    id: string;
    state: INormalButtonState;
} {
    const id = guid();
    return {
        id,
        state: {
            enable,
            count,
        },
    };
}

function getRadioButtonInterface(
    group: string,
    enable: boolean,
    text: string,
): {
    id: string;
    group: string;
    state: { id: string; text: string; disable: boolean };
} {
    const id = guid();
    return {
        id,
        group,
        state: {
            id,
            text,
            disable: !enable,
        },
    };
}

export async function renderToggleButton(): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());

    const buttons = [
        getToggleButtonInterface(true, false, "test1"),
        getToggleButtonInterface(false, true, "test2"),
        getToggleButtonInterface(false, false, "test3"),
    ];

    const actions = buttons.map((buttonInfo) =>
        StoreInterfaceExpose.react.widget.button.toggle.add(instanceId, { id: buttonInfo.id, ...buttonInfo.state }),
    );

    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <TianyuReact.Components.ToggleButton
                    key={buttonInfo.id}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    intanceId={instanceId}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    style={{ height: 80, margin: 10 }}
                />
            ))}
        </div>
    );
}

export async function renderNormalButton(): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());

    const buttons = [getNormalButtonInterface(true, 0), getNormalButtonInterface(false, 1)];

    const actions = buttons.map((buttonInfo) =>
        StoreInterfaceExpose.react.widget.button.button.add(instanceId, { id: buttonInfo.id, ...buttonInfo.state }),
    );

    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <TianyuReact.Components.Button
                    key={buttonInfo.id}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    intanceId={instanceId}
                    style={{ height: 80, width: 160, margin: 10, borderRadius: 40 }}
                />
            ))}
        </div>
    );
}

export async function renderRadioButton(): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());
    const group = guid();

    const buttons = [
        getRadioButtonInterface(group, true, "radio-button-1"),
        getRadioButtonInterface(group, true, "radio-button-2"),
        getRadioButtonInterface(group, true, "radio-button-3"),
        getRadioButtonInterface(group, true, "radio-button-4"),
        getRadioButtonInterface(group, false, "radio-button-5"),
    ];

    const actions: IInstanceAction<any>[] = [
        StoreInterfaceExpose.react.widget.button.radio.addGroup(instanceId, { group, default: buttons[1].id }),
        ...buttons.map((buttonInfo) =>
            StoreInterfaceExpose.react.widget.button.radio.join(instanceId, { group, info: buttonInfo.state }),
        ),
    ];
    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <TianyuReact.Components.RadioButton
                    key={buttonInfo.id}
                    group={group}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    intanceId={instanceId}
                    size={25}
                    style={{ margin: 15 }}
                />
            ))}
        </div>
    );
}
