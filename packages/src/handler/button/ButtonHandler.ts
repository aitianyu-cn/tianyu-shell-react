/** @format */

import { IButtonPorts } from "model/interface/ButtonInterface";
import { IButtonPortState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty } from "types/widget/Button";

export function getDefaultButtonState(prop: ReactControlledProperty<IButtonPorts, IButtonProperty>): IButtonPortState {
    return (
        (prop.ports && prop.store.selecteWithThrow(prop.ports.state)) || {
            selected: false,
            enable: false,
            text: "",
        }
    );
}
