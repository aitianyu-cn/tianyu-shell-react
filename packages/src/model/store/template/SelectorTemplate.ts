/** @format */

import { ActionFactor, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { DropdownSelectorStoreTemplate } from "model/interface/SelectorInterface";
import { IDropdownSelectorState } from "model/store/SelectorState";

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

DropdownSelectorInterfaceTemplate as DropdownSelectorStoreTemplate;

StoreUtils.registerTemplate(DropdownSelectorInterfaceTemplate);
