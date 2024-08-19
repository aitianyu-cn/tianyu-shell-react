/** @format */

import { IActionProvider, ParameterSelectorProvider } from "@aitianyu.cn/tianyu-store";
import { IDropdownSelectorState } from "model/store/SelectorState";

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
