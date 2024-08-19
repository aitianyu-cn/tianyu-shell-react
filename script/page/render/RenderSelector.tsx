/** @format */

import React from "react";
import { getInstanceId } from "script/store/Instance";
import { guid } from "@aitianyu.cn/types";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { StoreInterfaceExpose } from "script/store/InterfaceExpose";
import { TianyuReact } from "tianyu-shell-react";

async function getDropdownSelector(enable: boolean): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());

    const id = guid();

    await TianyuShellStore.getStore().dispatch(
        StoreInterfaceExpose.react.widget.select.dropdown.add(instanceId, {
            id,
            enable,
            values: [
                { key: "dropdown-key-1", value: "Value 1" },
                { key: "dropdown-key-2", value: "Value 2" },
                { key: "dropdown-key-3", value: "Value 3" },
                { key: "dropdown-key-4", value: "Value 4" },
                { key: "dropdown-key-5", value: "Value 5" },
                { key: "dropdown-key-6", value: "Value 6" },
                { key: "dropdown-key-7", value: "Value 7" },
                { key: "dropdown-key-8", value: "Value 8" },
            ],
            default: "dropdown-key-2",
        }),
    );

    return (
        <TianyuReact.Components.DropdownSelector
            key={id}
            intanceId={instanceId}
            parentInstance={TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]()}
            store={TianyuShellStore.getStore()}
            id={id}
        />
    );
}

export async function renderDropdownSelector(): Promise<React.ReactNode> {
    return (
        <div>
            {await getDropdownSelector(true)}
            {await getDropdownSelector(false)}
        </div>
    );
}
