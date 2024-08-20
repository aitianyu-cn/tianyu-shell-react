/** @format */

import { ISelectorState } from "model/store/SelectorState";
import { CheckboxSelectorInterfaceTemplate } from "model/store/template/SelectorTemplate";
import { ReactControlledProperty } from "types/TianyuElement";
import { ISelectorProperty } from "types/widget/Selector";

export function getDefaultSelectorState(prop: ReactControlledProperty<ISelectorProperty>): ISelectorState {
    return (
        prop.store.selecteWithThrow(
            CheckboxSelectorInterfaceTemplate.react.widget.select.checkbox.state(prop.instanceId, prop.id),
        ) || {
            enable: false,
            items: [],
            selected: [],
        }
    );
}
