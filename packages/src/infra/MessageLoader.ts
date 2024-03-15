/**@format */

import { DEFAULT_LANGUAGE, setI18nModuleCache } from "./Message";
import { Language } from "@aitianyu.cn/tianyu-shell/core";

const _i18nRequireContexts: { [local: string]: () => Promise<void> } = {
    [DEFAULT_LANGUAGE]: async () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache(
                    DEFAULT_LANGUAGE,
                    "content",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/content)(\/resources)?((\/i18n)|(\/strings))?\/message.properties$/,
                    ),
                );
                setI18nModuleCache(
                    DEFAULT_LANGUAGE,
                    "control",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/control)(\/resources)?((\/i18n)|(\/strings))?\/message.properties$/,
                    ),
                );
                setI18nModuleCache(
                    DEFAULT_LANGUAGE,
                    "navigator",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/navigation)(\/resources)?((\/i18n)|(\/strings))?\/message.properties$/,
                    ),
                );
            },
            "tianyu-shell/ui/react/i18n/default",
        ),
    ["zh_CN"]: async () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache(
                    "zh_CN",
                    "content",
                    require.context(
                        "../../shell-core/src",
                        true,
                        /\/[a-z\-0-9]+(\/resources)?((\/i18n)|(\/strings))?\/message_zh_CN.properties$/,
                    ),
                );
                setI18nModuleCache(
                    "zh_CN",
                    "control",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/control)(\/resources)?((\/i18n)|(\/strings))?\/message_zh_CN.properties$/,
                    ),
                );
                setI18nModuleCache(
                    "zh_CN",
                    "navigator",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/navigation)(\/resources)?((\/i18n)|(\/strings))?\/message_zh_CN.properties$/,
                    ),
                );
            },
            "tianyu-shell/ui/react/i18n/zh_CN",
        ),
    ["en_US"]: async () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache(
                    "en_US",
                    "content",
                    require.context(
                        "../../shell-core/src",
                        true,
                        /\/[a-z\-0-9]+(\/resources)?((\/i18n)|(\/strings))?\/message_en_US.properties$/,
                    ),
                );
                setI18nModuleCache(
                    "en_US",
                    "control",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/control)(\/resources)?((\/i18n)|(\/strings))?\/message_en_US.properties$/,
                    ),
                );
                setI18nModuleCache(
                    "en_US",
                    "navigator",
                    require.context(
                        "..",
                        true,
                        /\/[a-z\-0-9]+(\/navigation)(\/resources)?((\/i18n)|(\/strings))?\/message_en_US.properties$/,
                    ),
                );
            },
            "tianyu-shell/ui/react/i18n/en_US",
        ),
};

/**
 * Load i18n files
 *
 * @returns return an async promise
 */
export async function loadI18n(): Promise<void> {
    return Promise.all([_i18nRequireContexts[DEFAULT_LANGUAGE]?.(), _i18nRequireContexts[Language.toString()]?.()]).then(
        async () => Promise.resolve(),
        async () => Promise.reject(),
    );
}

/**
 * Load default i18n files
 *
 * @returns return an async promise
 */
export async function loadI18nWithDefault(): Promise<void> {
    return _i18nRequireContexts[DEFAULT_LANGUAGE]?.() || Promise.resolve();
}
