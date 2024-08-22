/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { IDropdownSelectorState, ISelectorState } from "model/store/SelectorState";

export interface DropdownSelectorStoreTemplate {
    react: {
        widget: {
            select: {
                dropdown: {
                    select: IActionProvider<
                        any,
                        {
                            id: string;
                            value: string;
                        },
                        any
                    >;
                    state: ParameterSelectorProvider<any, string, IDropdownSelectorState>;
                };
            };
        };
    };
}

export interface SelectorStoreTemplate {
    react: {
        widget: {
            select: {
                checkbox: {
                    state: ParameterSelectorProvider<any, string, ISelectorState>;
                };
            };
        };
    };
}
