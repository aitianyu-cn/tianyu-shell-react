/** @format */

import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";
import { TIANYU_REACT_TEST_STORE_TYPE } from "./StoreState";

export function getInstanceId(baseId: InstanceId): InstanceId {
    return StoreHelper.generateInstanceId(baseId, TIANYU_REACT_TEST_STORE_TYPE, "instance");
}
