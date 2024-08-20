/** @format */

import { ActionFactor, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { DropdownSelectorStoreTemplate, SelectorStoreTemplate } from "model/interface/SelectorInterface";
import { IDropdownSelectorState, ISelectorState } from "model/store/SelectorState";

export const DropdownSelectorInterfaceTemplate = {
    react: {
        widget: {
            select: {
                dropdown: {
                    select: ActionFactor.makeVirtualAction<
                        any,
                        {
                            id: string;
                            value: string;
                        }
                    >(),
                    state: SelectorFactor.makeVirtualParameterSelector<any, string, IDropdownSelectorState>(),
                },
            },
        },
    },
};

export const CheckboxSelectorInterfaceTemplate = {
    react: {
        widget: {
            select: {
                checkbox: {
                    state: SelectorFactor.makeVirtualParameterSelector<any, string, ISelectorState>(),
                },
            },
        },
    },
};

DropdownSelectorInterfaceTemplate as DropdownSelectorStoreTemplate;
CheckboxSelectorInterfaceTemplate as SelectorStoreTemplate;

StoreUtils.registerTemplate(DropdownSelectorInterfaceTemplate);
StoreUtils.registerTemplate(CheckboxSelectorInterfaceTemplate);
