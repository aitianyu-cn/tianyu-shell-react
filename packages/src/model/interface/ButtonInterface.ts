/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { IButtonTemplateState } from "model/store/ButtonState";

export interface IGroupedButtonTemplate {
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
}

export interface ISingleButtonTemplate {
    click: IActionProvider<any, string, any>;
    state: ParameterSelectorProvider<any, string, IButtonTemplateState>;
}

export interface ButtonStoreTemplate {
    react: {
        widget: {
            button: {
                button?: ISingleButtonTemplate;
                radio?: IGroupedButtonTemplate;
                toggle?: ISingleButtonTemplate;
                checkbox?: ISingleButtonTemplate | IGroupedButtonTemplate;
            };
        };
    };
}
