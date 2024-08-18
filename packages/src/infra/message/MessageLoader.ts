/**@format */

import { DEFAULT_LANGUAGE, setI18nModuleCache } from "./Message";
import { Language } from "@aitianyu.cn/tianyu-shell/core";

const _i18nRequireContexts: { [local: string]: () => void } = {
    [DEFAULT_LANGUAGE]: () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache(DEFAULT_LANGUAGE, require.context("./i18n", true, /message.properties$/));
            },
            "aitianyu.cn/tianyu-shell-react/i18n/default",
        ),
    ["zh_CN"]: () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache("zh_CN", require.context("./i18n", true, /message_zh_CN.properties$/));
            },
            "aitianyu.cn/tianyu-shell-react/i18n/zh_CN",
        ),
    ["en_US"]: () =>
        require.ensure(
            [],
            (require: NodeRequire) => {
                setI18nModuleCache("en_US", require.context("./i18n", true, /message_en_US.properties$/));
            },
            "aitianyu.cn/tianyu-shell-react/i18n/en_US",
        ),
};

/**
 * Load i18n files
 *
 * @returns return an async promise
 */
export function loadI18n(): void {
    _i18nRequireContexts[DEFAULT_LANGUAGE]?.();
    _i18nRequireContexts[Language.toString()]?.();
}

/**
 * Load default i18n files
 *
 * @returns return an async promise
 */
export function loadI18nWithDefault(): void {
    return _i18nRequireContexts[DEFAULT_LANGUAGE]?.();
}
