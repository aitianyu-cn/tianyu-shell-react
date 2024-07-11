/** @format */

import { ReactRadioButtonStoreType } from "model/control/RadioButton";
import { RadioButtonExpose, RadioButtonInterface } from "./radio-button/Interface";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { ITianyuStoreInterfaceImplementation, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { ReactToggleButtonStoreType } from "model/control/Toggle";
import { ToggleButtonExpose, ToggleButtonInterface } from "./toggle/Interface";
import { ReactSelectorStoreType } from "model/control/Selector";
import { SelectorExpose, SelectorInterface } from "./selector/Interface";

export const ReactControlTypes = {
    RadioButton: ReactRadioButtonStoreType,
    ToggleButton: ReactToggleButtonStoreType,
    Selector: ReactSelectorStoreType,
};

export const ReactControlInterface = {
    [ReactRadioButtonStoreType]: RadioButtonInterface,
    [ReactToggleButtonStoreType]: ToggleButtonInterface,
    [ReactSelectorStoreType]: SelectorInterface,
};

export const ReactControlExpose = {
    [ReactRadioButtonStoreType]: RadioButtonExpose,
    [ReactToggleButtonStoreType]: ToggleButtonExpose,
    [ReactSelectorStoreType]: SelectorExpose,
};

ReactControlInterface as ITianyuStoreInterfaceImplementation;
ReactControlExpose as ITianyuStoreInterfaceImplementation;

TianyuShellStore.getStore().registerInterface(ReactControlInterface);
