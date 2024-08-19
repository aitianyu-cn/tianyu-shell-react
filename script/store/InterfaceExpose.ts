/** @format */

import { ActionFactor, ITianyuStoreInterfaceImplementation, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { AppStoreState, INormalButtonState, IToggleButtonState, TIANYU_REACT_TEST_STORE_TYPE } from "./StoreState";
import { KeyValuePair } from "@aitianyu.cn/types";
import { TianyuReact } from "tianyu-shell-react";

export const StoreInterfaceExpose = {
    react: {
        widget: {
            button: {
                button: {
                    add: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            id: string;
                        } & INormalButtonState,
                        {
                            id: string;
                        } & INormalButtonState
                    >(),
                    enable: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),
                    click: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),

                    state: SelectorFactor.makeVirtualParameterSelector<
                        AppStoreState,
                        string,
                        TianyuReact.State.IButtonTemplateState
                    >(),
                },

                toggle: {
                    add: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        { id: string } & IToggleButtonState,
                        { id: string } & IToggleButtonState
                    >(),
                    enable: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),
                    click: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),

                    state: SelectorFactor.makeVirtualParameterSelector<
                        AppStoreState,
                        string,
                        TianyuReact.State.IButtonTemplateState
                    >(),
                },

                radio: {
                    addGroup: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        { group: string; default?: string },
                        { group: string; default?: string }
                    >(),

                    join: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            group: string;
                            info: {
                                id: string;
                                text: string;
                                disable: boolean;
                            };
                        },
                        {
                            group: string;
                            info: {
                                id: string;
                                text: string;
                                disable: boolean;
                            };
                        }
                    >(),
                    enable: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            group: string;
                            id: string;
                        },
                        {
                            group: string;
                            id: string;
                        }
                    >(),
                    click: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            group: string;
                            id: string;
                        },
                        {
                            group: string;
                            id: string;
                        }
                    >(),

                    state: SelectorFactor.makeVirtualParameterSelector<
                        AppStoreState,
                        {
                            group: string;
                            id: string;
                        },
                        TianyuReact.State.IButtonTemplateState
                    >(),
                },
            },

            select: {
                dropdown: {
                    add: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            id: string;
                            enable: boolean;
                            values: KeyValuePair<string, string>[];
                            default: string;
                        }
                    >(),
                    select: ActionFactor.makeVirtualAction<
                        AppStoreState,
                        {
                            id: string;
                            value: string;
                        }
                    >(),
                    state: SelectorFactor.makeVirtualParameterSelector<
                        AppStoreState,
                        string,
                        TianyuReact.State.IDropdownSelectorState
                    >(),
                },
            },
        },

        container: {},
    },
};

StoreInterfaceExpose as ITianyuStoreInterfaceImplementation;
StoreInterfaceExpose as TianyuReact.Template.Button;
StoreInterfaceExpose as TianyuReact.Template.DropdownSelector;

StoreUtils.registerExpose(StoreInterfaceExpose, TIANYU_REACT_TEST_STORE_TYPE);
