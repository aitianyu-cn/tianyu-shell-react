/** @format */

import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";

export function getInstanceId(baseId: InstanceId): InstanceId {
    return StoreHelper.generateInstanceId(baseId, "tianyu-shell-react-test", "instance");
}
