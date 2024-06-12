/** @format */

import { ReactRadioButtonStoreType } from "model/control/RadioButton";
import { RadioButtonInterface } from "./radio-button/Interface";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { ITianyuStoreInterfaceImplementation } from "@aitianyu.cn/tianyu-store";
import { ReactToggleButtonStoreType } from "model/control/Toggle";
import { ToggleButtonInterface } from "./toggle/Interface";

export const ReactControlTypes = {
    RadioButton: ReactRadioButtonStoreType,
    ToggleButton: ReactToggleButtonStoreType,
};

export const ReactControlInterface = {
    [ReactRadioButtonStoreType]: RadioButtonInterface,
    [ReactToggleButtonStoreType]: ToggleButtonInterface,
};

ReactControlInterface as ITianyuStoreInterfaceImplementation;

TianyuShellStore.getStore().registerInterface(ReactControlInterface);
