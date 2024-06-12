/**@format */

export * from "./src/model/React";
export * from "./src/model/constant/ErrorCode";
export * from "./src/model/control/RadioButton";

export { loadI18n } from "./src/infra/MessageLoader";

export * from "./src/components/TianyuElement";
export * from "./src/components/TianyuStatelessElement";

import * as ControlComponents from "./src/components/control/Control";
import * as ControlInterface from "./src/components/control/Interface";

export namespace Components {
    export import Control = ControlComponents.Control;
}

export const ComponentsInterface = {
    ...ControlInterface.ReactControlInterface,
};

export const ComponentsType = {
    ...ControlInterface.ReactControlTypes,
};
