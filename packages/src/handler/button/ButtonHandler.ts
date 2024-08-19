/** @format */

import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";
import { IButtonTemplateState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty, IGroupableButtonProperty } from "types/widget/Button";

export function getDefaultButtonState(prop: ReactControlledProperty<IButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(ButtonInterfaceTemplate.react.widget.button.button.state(prop.intanceId, prop.id)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}

export function getDefaultToggleButtonState(prop: ReactControlledProperty<IButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(ButtonInterfaceTemplate.react.widget.button.toggle.state(prop.intanceId, prop.id)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}

export function getDefaultRadioButtonState(prop: ReactControlledProperty<IGroupableButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(
            ButtonInterfaceTemplate.react.widget.button.radio.state(prop.intanceId, {
                group: prop.group,
                id: prop.id,
            }),
        ) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}
