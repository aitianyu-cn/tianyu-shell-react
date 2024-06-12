/** @format */

import { ReactRadioButtonStoreType } from "model/control/RadioButton";
import { RadioButtonInterface } from "./radio-button/Interface";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";

export const ReactControlTypes = {
    RadioButton: ReactRadioButtonStoreType,
};

export const ReactControlInterface = {
    [ReactRadioButtonStoreType]: RadioButtonInterface,
};

TianyuShellStore.getStore().registerInterface(ReactControlInterface);
