/** @format */

import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";
import { ReactRadioButtonStoreType } from "model/control/RadioButton";

export function generateInstanceId(): InstanceId {
    const storeInstance = TianyuShellStore.getInstanceId();
    return StoreHelper.generateInstanceId(storeInstance, ReactRadioButtonStoreType);
}
