/** @format */

import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";
import { TianyuShell } from "model/React";
import { ReactRadioButtonStoreType } from "model/control/RadioButton";

export function generateInstanceId(): InstanceId {
    const storeInstance = TianyuShell.core.ui.store.instanceId;
    return StoreHelper.generateInstanceId(storeInstance, ReactRadioButtonStoreType);
}
