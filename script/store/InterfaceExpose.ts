/** @format */

import { ActionFactor, ITianyuStoreInterfaceImplementation, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { AppStoreState, INormalButtonState, IToggleButtonState, TIANYU_REACT_TEST_STORE_TYPE } from "./StoreState";
import { IButtonPortState } from "model/store/ButtonState";

export const StoreInterfaceExpose = {
    widget: {
        button: {
            toggleButton: {
                add: ActionFactor.makeVirtualAction<
                    AppStoreState,
                    { id: string } & IToggleButtonState,
                    { id: string } & IToggleButtonState
                >(),
                enable: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),
                switch: ActionFactor.makeVirtualAction<AppStoreState, string, string>(),

                get: SelectorFactor.makeVirtualParameterSelector<AppStoreState, string, IButtonPortState>(),
            },
            normal: {
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

                get: SelectorFactor.makeVirtualParameterSelector<AppStoreState, string, IButtonPortState>(),
            },

            radioButton: {
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
                        button: string;
                    },
                    {
                        group: string;
                        button: string;
                    }
                >(),
                select: ActionFactor.makeVirtualAction<
                    AppStoreState,
                    {
                        group: string;
                        button: string;
                    },
                    {
                        group: string;
                        button: string;
                    }
                >(),

                get: SelectorFactor.makeVirtualParameterSelector<
                    AppStoreState,
                    {
                        group: string;
                        button: string;
                    },
                    IButtonPortState
                >(),
            },
        },
    },

    container: {},
};

StoreInterfaceExpose as ITianyuStoreInterfaceImplementation;

StoreUtils.registerExpose(StoreInterfaceExpose, TIANYU_REACT_TEST_STORE_TYPE);
