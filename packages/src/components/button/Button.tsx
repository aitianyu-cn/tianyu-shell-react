/** @format */

import React from "react";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty } from "types/widget/Button";
import { ButtonBase } from "./ButtonBase";
import { getDefaultButtonState } from "handler/button/ButtonHandler";
import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";

export class Button extends ButtonBase {
    public constructor(prop: ReactControlledProperty<IButtonProperty>) {
        super(prop, getDefaultButtonState(prop));
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(ButtonInterfaceTemplate.react.widget.button.button.state(this.instanceId, this.id));
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }

    public override render(): React.ReactNode {
        const style = this.props.style || {};
        return (
            <button style={style} onClick={this.onClick.bind(this)} disabled={!this.getState.enable}>
                {this.getState.text}
            </button>
        );
    }
    private onClick(): void {
        if (!this.shoudHandleClick()) {
            return;
        }

        this.store.dispatch(ButtonInterfaceTemplate.react.widget.button.button.click(this.instanceId, this.id));
    }
}
