/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { IButtonTemplateState } from "model/store/ButtonState";

export interface ButtonStoreTemplate {
    react: {
        widget: {
            button: {
                button?: {
                    click: IActionProvider<any, string, any>;
                    state: ParameterSelectorProvider<any, string, IButtonTemplateState>;
                };
                radio?: {
                    click: IActionProvider<
                        any,
                        {
                            group: string;
                            id: string;
                        },
                        any
                    >;
                    state: ParameterSelectorProvider<
                        any,
                        {
                            group: string;
                            id: string;
                        },
                        IButtonTemplateState
                    >;
                };
                toggle?: {
                    click: IActionProvider<any, string, any>;
                    state: ParameterSelectorProvider<any, string, IButtonTemplateState>;
                };
            };
        };
    };
}
