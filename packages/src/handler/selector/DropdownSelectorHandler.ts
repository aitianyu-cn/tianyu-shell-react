/** @format */

import { IDropdownSelectorPorts } from "model/interface/SelectorInterface";
import { IDropdownSelectorState } from "model/store/SelectorState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IDropdownSelectorProperty } from "types/widget/Selector";

export function getDefaultDropdownSelectorState(
    prop: ReactControlledProperty<IDropdownSelectorPorts, IDropdownSelectorProperty>,
): IDropdownSelectorState {
    return (
        (prop.ports && prop.store.selecteWithThrow(prop.ports.state)) || {
            enable: false,
            items: [],
            selected: "",
        }
    );
}
