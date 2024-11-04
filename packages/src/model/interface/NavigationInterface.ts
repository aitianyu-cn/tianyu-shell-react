/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { INavigationItemState, INavigationListState, INavigationViewItemState } from "model/store/NavigationState";
import { NavigatorDisplayType } from "types/widget/Navigation";

export interface NavigationItemStoreTemplate {
    react: {
        widget: {
            navigator: {
                button: {
                    click: IActionProvider<any, { containerId: string; id: string }, any>;
                    state: ParameterSelectorProvider<any, { containerId: string; id: string }, INavigationItemState>;
                };
            };
        };
    };
}
export interface NavigationViewItemStoreTemplate {
    react: {
        widget: {
            navigator: {
                view: {
                    state: ParameterSelectorProvider<any, { containerId: string; id: string }, INavigationViewItemState>;
                };
            };
        };
    };
}
export interface NavigationListStoreTemplate {
    react: {
        widget: {
            navigator: {
                list: {
                    click: IActionProvider<any, { containerId: string; id: string }, any>;
                    state: ParameterSelectorProvider<any, { containerId: string; id: string }, INavigationListState>;
                };
            };
        };
    };
}

export interface NavigatorStoreTemplate {
    react: {
        widget: {
            navigator: {
                container: {
                    displayType: ParameterSelectorProvider<
                        any,
                        string,
                        {
                            type: NavigatorDisplayType;
                            expand: boolean;
                        }
                    >;
                };
            };
        };
    };
}
