/** @format */

import { ControlledElement } from "model/ControlledElement";
import { IButtonTemplateState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty } from "types/widget/Button";

export class ButtonBase<P extends IButtonProperty = IButtonProperty> extends ControlledElement<P, IButtonTemplateState> {
    public constructor(prop: ReactControlledProperty<P>, state: IButtonTemplateState) {
        super(prop, state);
    }

    protected shoudHandleClick(): boolean {
        return this.getState.enable;
    }
}
