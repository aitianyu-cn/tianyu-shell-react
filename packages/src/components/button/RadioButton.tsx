/** @format */

import React from "react";
import { getDefaultButtonState } from "handler/button/ButtonHandler";
import { ControlledElement } from "model/ControlledElement";
import { IButtonPorts } from "model/interface/ButtonInterface";
import { IButtonPortState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IRadioButtonProperty } from "types/widget/Button";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { radioButtonStylingGenerator } from "handler/button/RadioButtonHandler";

export class RadioButton extends ControlledElement<IButtonPorts, IRadioButtonProperty, IButtonPortState> {
    public constructor(prop: ReactControlledProperty<IButtonPorts, IRadioButtonProperty>) {
        super(prop, getDefaultButtonState(prop));
    }

    public override componentDidMount(): void {
        this.setLoaded();

        if (this.storeInterface) {
            this.toSubscribeStateChange(this.storeInterface.state);
        }
    }
    public override componentWillUnmount(): void {
        this.toUnsubscribeStateChange();
        this.setUnload();
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
        if (!this.getState.enable) {
            return;
        }

        this.storeInterface && this.store.dispatch(this.storeInterface.click);
    }
}
