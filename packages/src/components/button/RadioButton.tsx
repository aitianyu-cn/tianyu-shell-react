/** @format */

import React from "react";
import { ReactControlledProperty } from "types/TianyuElement";
import { IRadioButtonProperty } from "types/widget/Button";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { radioButtonStylingGenerator } from "handler/button/RadioButtonHandler";
import { ButtonBase } from "./ButtonBase";
import { getDefaultRadioButtonState } from "handler/button/ButtonHandler";
import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";

export class RadioButton extends ButtonBase<IRadioButtonProperty> {
    public constructor(prop: ReactControlledProperty<IRadioButtonProperty>) {
        super(prop, getDefaultRadioButtonState(prop));
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(
            ButtonInterfaceTemplate.react.widget.button.radio.state(this.instanceId, {
                group: this.props.group,
                id: this.id,
            }),
        );
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }

    public override render(): React.ReactNode {
        const styling = radioButtonStylingGenerator(this.props, this.getState.enable, this.getState.selected);
        return (
            <div style={styling.baseStyle} onClick={isMobile() ? this.onClick.bind(this) : undefined}>
                <div style={styling.containerStyle} onClick={isMobile() ? undefined : this.onClick.bind(this)}>
                    <div style={styling.buttonStyle} />
                </div>
                <div style={styling.textStyle}>{this.getState.text}</div>
            </div>
        );
    }
    private onClick(): void {
        if (!this.shoudHandleClick()) {
            return;
        }

        this.store.dispatch(
            ButtonInterfaceTemplate.react.widget.button.radio.click(this.instanceId, {
                group: this.props.group,
                id: this.id,
            }),
        );
    }
}
