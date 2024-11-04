/** @format */

import { ActionFactor, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { INavigationItemState, INavigationListState, INavigationViewItemState } from "../NavigationState";
import { NavigatorDisplayType } from "types/widget/Navigation";
import {
    NavigationItemStoreTemplate,
    NavigationListStoreTemplate,
    NavigationViewItemStoreTemplate,
    NavigatorStoreTemplate,
} from "model/interface/NavigationInterface";

export const NavigationItemInterfaceTemplate = {
    react: {
        widget: {
            navigator: {
                button: {
                    click: ActionFactor.makeVirtualAction<any, { containerId: string; id: string }>(),
                    state: SelectorFactor.makeVirtualParameterSelector<
                        any,
                        { containerId: string; id: string },
                        INavigationItemState
                    >(),
                },
                view: {
                    state: SelectorFactor.makeVirtualParameterSelector<
                        any,
                        { containerId: string; id: string },
                        INavigationViewItemState
                    >(),
                },
                list: {
                    click: ActionFactor.makeVirtualAction<any, { containerId: string; id: string }>(),
                    state: SelectorFactor.makeVirtualParameterSelector<
                        any,
                        { containerId: string; id: string },
                        INavigationListState
                    >(),
                },
            },
        },
    },
};

export const NavigatorInterfaceTemplate = {
    react: {
        widget: {
            navigator: {
                container: {
                    displayType: SelectorFactor.makeVirtualParameterSelector<
                        any,
                        string,
                        {
                            type: NavigatorDisplayType;
                            expand: boolean;
                        }
                    >(),
                },
            },
        },
    },
};

NavigationItemInterfaceTemplate as NavigationItemStoreTemplate;
NavigationItemInterfaceTemplate as NavigationViewItemStoreTemplate;
NavigationItemInterfaceTemplate as NavigationListStoreTemplate;

StoreUtils.registerTemplate(NavigationItemInterfaceTemplate);

NavigatorInterfaceTemplate as NavigatorStoreTemplate;

StoreUtils.registerTemplate(NavigatorInterfaceTemplate);
