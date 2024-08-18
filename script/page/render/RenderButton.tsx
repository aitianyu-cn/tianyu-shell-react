/** @format */

import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { IInstanceAction, InstanceId, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { guid } from "@aitianyu.cn/types";
import { Button } from "components/button/Button";
import { RadioButton } from "components/button/RadioButton";
import { ToggleButton } from "components/button/ToggleButton";
import { IButtonPorts } from "model/interface/ButtonInterface";
import React from "react";
import { getInstanceId } from "script/store/Instance";
import { StoreInterfaceExpose } from "script/store/InterfaceExpose";
import { INormalButtonState, IRadioButtonState, IToggleButtonState } from "script/store/StoreState";

function getToggleButtonInterface(
    instanceId: InstanceId,
    enable: boolean,
    selected: boolean,
    text: string,
): {
    id: string;
    ports: IButtonPorts;
    state: IToggleButtonState;
} {
    const id = guid();
    return {
        id,
        ports: {
            state: StoreInterfaceExpose.widget.button.toggleButton.get(instanceId, id),
            click: StoreInterfaceExpose.widget.button.toggleButton.switch(instanceId, id),
        },
        state: {
            enable,
            selected,
            text,
        },
    };
}

function getNormalButtonInterface(
    instanceId: InstanceId,
    enable: boolean,
    count: number,
): {
    id: string;
    ports: IButtonPorts;
    state: INormalButtonState;
} {
    const id = guid();
    return {
        id,
        ports: {
            state: StoreInterfaceExpose.widget.button.normal.get(instanceId, id),
            click: StoreInterfaceExpose.widget.button.normal.click(instanceId, id),
        },
        state: {
            enable,
            count,
        },
    };
}

function getRadioButtonInterface(
    instanceId: InstanceId,
    group: string,
    enable: boolean,
    text: string,
): {
    id: string;
    ports: IButtonPorts;
    state: { id: string; text: string; disable: boolean };
} {
    const id = guid();
    return {
        id,
        ports: {
            state: StoreInterfaceExpose.widget.button.radioButton.get(instanceId, { group, button: id }),
            click: StoreInterfaceExpose.widget.button.radioButton.select(instanceId, { group, button: id }),
        },
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
        getToggleButtonInterface(instanceId, true, false, "test1"),
        getToggleButtonInterface(instanceId, false, true, "test2"),
        getToggleButtonInterface(instanceId, false, false, "test3"),
    ];

    const actions = buttons.map((buttonInfo) =>
        StoreInterfaceExpose.widget.button.toggleButton.add(instanceId, { id: buttonInfo.id, ...buttonInfo.state }),
    );

    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <ToggleButton
                    key={buttonInfo.id}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    ports={buttonInfo.ports}
                    style={{ height: 80, margin: 10 }}
                />
            ))}
        </div>
    );
}

export async function renderNormalButton(): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());

    const buttons = [getNormalButtonInterface(instanceId, true, 0), getNormalButtonInterface(instanceId, false, 1)];

    const actions = buttons.map((buttonInfo) =>
        StoreInterfaceExpose.widget.button.normal.add(instanceId, { id: buttonInfo.id, ...buttonInfo.state }),
    );

    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <Button
                    key={buttonInfo.id}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    ports={buttonInfo.ports}
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
        getRadioButtonInterface(instanceId, group, true, "radio-button-1"),
        getRadioButtonInterface(instanceId, group, true, "radio-button-2"),
        getRadioButtonInterface(instanceId, group, true, "radio-button-3"),
        getRadioButtonInterface(instanceId, group, true, "radio-button-4"),
        getRadioButtonInterface(instanceId, group, false, "radio-button-5"),
    ];

    const actions: IInstanceAction[] = [
        StoreInterfaceExpose.widget.button.radioButton.addGroup(instanceId, { group, default: buttons[1].id }),
        ...buttons.map((buttonInfo) =>
            StoreInterfaceExpose.widget.button.radioButton.join(instanceId, { group, info: buttonInfo.state }),
        ),
    ];
    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <RadioButton
                    key={buttonInfo.id}
                    parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    ports={buttonInfo.ports}
                    size={25}
                    style={{ margin: 15 }}
                />
            ))}
        </div>
    );
}
