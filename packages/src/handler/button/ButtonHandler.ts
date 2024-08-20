/** @format */

import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";
import { IButtonTemplateState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty, IRadioButtonProperty, ICheckboxButtonProperty } from "types/widget/Button";
import { getCheckboxButtonStateFromStore } from "./CheckboxButtonHandler";

export function getDefaultButtonState(prop: ReactControlledProperty<IButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(ButtonInterfaceTemplate.react.widget.button.button.state(prop.instanceId, prop.id)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}

export function getDefaultToggleButtonState(prop: ReactControlledProperty<IButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(ButtonInterfaceTemplate.react.widget.button.toggle.state(prop.instanceId, prop.id)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}

export function getDefaultRadioButtonState(prop: ReactControlledProperty<IRadioButtonProperty>): IButtonTemplateState {
    return (
        prop.store.selecteWithThrow(
            ButtonInterfaceTemplate.react.widget.button.radio.state(prop.instanceId, {
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

export function getDefaultCheckboxButtonState(prop: ReactControlledProperty<ICheckboxButtonProperty>): IButtonTemplateState {
    return (
        (prop.subscribeable && getCheckboxButtonStateFromStore(prop)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}
