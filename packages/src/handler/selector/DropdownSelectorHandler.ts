/** @format */

import { IDropdownSelectorState } from "model/store/SelectorState";
import { DropdownSelectorInterfaceTemplate } from "model/store/template/SelectorTemplate";
import { ReactControlledProperty } from "types/TianyuElement";
import { IDropdownSelectorProperty } from "types/widget/Selector";

export function getDefaultDropdownSelectorState(
    prop: ReactControlledProperty<IDropdownSelectorProperty>,
): IDropdownSelectorState {
    return (
        prop.store.selecteWithThrow(
            DropdownSelectorInterfaceTemplate.react.widget.select.dropdown.state(prop.intanceId, prop.id),
        ) || {
            enable: false,
            items: [],
            selected: "",
        }
    );
}
