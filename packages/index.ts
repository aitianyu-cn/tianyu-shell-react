/**@format */

export * from "./src/model/React";
export * from "./src/model/constant/ErrorCode";
export * from "./src/model/control/RadioButton";
export * from "./src/model/control/Selector";
export * from "./src/model/control/Toggle";
export * from "./src/model/navigation/Navigation";
export * from "./src/model/content/Content";

export { loadI18n } from "./src/infra/MessageLoader";

export * from "./src/components/TianyuElement";
export * from "./src/components/TianyuStatelessElement";

import { ITianyuStoreInterfaceImplementation } from "@aitianyu.cn/tianyu-store";
import * as ControlComponents from "./src/components/control/Control";
import * as ControlInterface from "./src/components/control/Interface";

import * as ContentComponents from "./src/components/content/Content";
import * as NavigationComponents from "./src/components/navigation/Navigation";

export namespace Components {
    export import Control = ControlComponents.Control;
    export import Content = ContentComponents.Content;
    export import Navigation = NavigationComponents.Navigation;
}

export const ComponentsInterface = {
    ...ControlInterface.ReactControlExpose,
};

export const ComponentsType = {
    ...ControlInterface.ReactControlTypes,
};

ComponentsInterface as ITianyuStoreInterfaceImplementation;
