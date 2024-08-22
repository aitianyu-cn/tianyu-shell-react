/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { INavigationItemState } from "model/store/NavigationState";

export interface NavigationItemStoreTemplate {
    react: {
        widget: {
            navigator: {
                button: {
                    click: IActionProvider<any, { id: string; group: string }, any>;
                    state: ParameterSelectorProvider<any, { id: string; group: string }, INavigationItemState>;
                };
            };
        };
    };
}

export interface NavigatorStoreTemplate {
    react: {
        widget: {
            navigator: {
                container: {};
            };
        };
    };
}
