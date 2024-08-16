/** @format */

import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";
import { ReactSelectorStoreType } from "model/control/Selector";

export function generateInstanceId(id?: string): InstanceId {
    const storeInstance = TianyuShellStore.getInstanceId();
    return StoreHelper.generateInstanceId(storeInstance, ReactSelectorStoreType, id);
}
