/** @format */

import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { StoreUtils } from "@aitianyu.cn/tianyu-store";
import { guid } from "@aitianyu.cn/types";
import { Resource } from "components/navigation/utils/ResourceHelper";
import { INavigationItemState } from "model/store/NavigationState";
import React from "react";
import { getInstanceId } from "script/store/Instance";
import { StoreInterfaceExpose } from "script/store/InterfaceExpose";
import { TianyuReact } from "tianyu-shell-react";

export async function renderNavigationItem(): Promise<React.ReactNode> {
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());

    const buttons: ({ id: string } & INavigationItemState)[] = [
        {
            id: guid(),
            enable: true,
            text: "测试的按钮",
            size: 15,
            icon: Resource.src.IOS.MenuIcon.Dark,
            type: "url",
            index: 0,
            select: false,
            assist: false,
        },
    ];

    const actions = buttons.map((buttonInfo) => StoreInterfaceExpose.react.widget.navigator.button.add(instanceId, buttonInfo));
    await TianyuShellStore.getStore().dispatch(StoreUtils.createBatchAction(actions));

    return (
        <div>
            {buttons.map((buttonInfo) => (
                <TianyuReact.Components.NavigationItem.NavigationItem
                    key={buttonInfo.id}
                    parentInstance={instanceId}
                    instanceId={instanceId}
                    store={TianyuShellStore.getStore()}
                    id={buttonInfo.id}
                    containerId=""
                />
            ))}
        </div>
    );
}
