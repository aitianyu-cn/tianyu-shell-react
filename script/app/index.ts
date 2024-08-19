/** @format */

import { ITianyuShellInitial } from "@aitianyu.cn/tianyu-shell";
import { getInstanceId } from "script/store/Instance";
import { StoreInterfaceImpl } from "script/store/InterfaceImpl";
import { TIANYU_REACT_TEST_STORE_TYPE } from "script/store/StoreState";

async function init(): Promise<void> {
    const { initialTianyuShellAsync } = await import("@aitianyu.cn/tianyu-shell");
    const initial: ITianyuShellInitial = {
        core: {
            runtime: {
                console: true,
            },
            environment: "development",
            version: "1.1.1.1",
            plugin: {
                globalize: true,
            },
            sync: {
                compatibility: true,
                proxy: "/remote-resources",
            },
        },
        runtime: {
            globalCache: true,
            globalStorage: true,

            support: {
                router: false,
            },
        },
        ui: {
            core: {
                support: true,
            },
            theme: {},
        },
    };

    await initialTianyuShellAsync(initial);
}

init().then(async () => {
    const { TianyuShellStore } = await import("@aitianyu.cn/tianyu-shell/core");

    TianyuShellStore.getStore().registerInterface(TIANYU_REACT_TEST_STORE_TYPE, StoreInterfaceImpl);
    const instanceId = getInstanceId(TianyuShellStore.InstanceMap["tianyu-shell-system-non-history-entity"]());
    await TianyuShellStore.getStore().dispatch(StoreInterfaceImpl.core.creator(instanceId));

    const div = document.getElementById("tianyu_shell_root");

    if (div) {
        const { TianyuReact } = await import("tianyu-shell-react");
        TianyuReact.Infra.loadI18n();
        const { App } = await import("../page/App");
        await App(div);
    }
});
