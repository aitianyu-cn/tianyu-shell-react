/** @format */

import { ITianyuShellInitial } from "@aitianyu.cn/tianyu-shell";

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
    const { waitLoading } = await import("@aitianyu.cn/tianyu-shell/core");
    await waitLoading();

    const { loadI18n } = await import("index");
    await loadI18n();
}

init().then(async () => {
    const { Major } = await import("@aitianyu.cn/tianyu-shell/core");
    const maj = document.createElement("div");
    maj.style.width = "100px";
    maj.style.height = "100px";
    maj.style.backgroundColor = "#AAAAAA";
    Major.append(maj);

    const div = document.getElementById("tianyu_shell_root");

    if (div) {
        const { App } = await import("../page/App");
        App(div);
    }
});
