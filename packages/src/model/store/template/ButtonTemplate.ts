/** @format */

import { ActionFactor, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { ButtonStoreTemplate } from "model/interface/ButtonInterface";
import { IButtonTemplateState } from "model/store/ButtonState";

export const ButtonInterfaceTemplate = {
    react: {
        widget: {
            button: {
                button: {
                    click: ActionFactor.makeVirtualAction<any, string>(),
                    state: SelectorFactor.makeVirtualParameterSelector<any, string, IButtonTemplateState>(),
                },
                radio: {
                    click: ActionFactor.makeVirtualAction<any, { group: string; id: string }>(),
                    state: SelectorFactor.makeVirtualParameterSelector<
                        any,
                        { group: string; id: string },
                        IButtonTemplateState
                    >(),
                },
                toggle: {
                    click: ActionFactor.makeVirtualAction<any, string>(),
                    state: SelectorFactor.makeVirtualParameterSelector<any, string, IButtonTemplateState>(),
                },
            },
        },
    },
};

ButtonInterfaceTemplate as ButtonStoreTemplate;

StoreUtils.registerTemplate(ButtonInterfaceTemplate);
