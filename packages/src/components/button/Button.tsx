/** @format */

import React from "react";
import { getDefaultButtonState } from "handler/button/ButtonHandler";
import { ControlledElement } from "model/ControlledElement";
import { IButtonPortState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IButtonProperty } from "types/widget/Button";
import { IButtonPorts } from "model/interface/ButtonInterface";

export class Button extends ControlledElement<IButtonPorts, IButtonProperty, IButtonPortState> {
    public constructor(prop: ReactControlledProperty<IButtonPorts, IButtonProperty>) {
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
        const style = this.props.style || {};
        return (
            <button style={style} onClick={this.onClick.bind(this)} disabled={!this.getState.enable}>
                {this.getState.text}
            </button>
        );
    }

    private onClick(): void {
        if (!this.getState.enable) {
            return;
        }

        this.storeInterface && this.store.dispatch(this.storeInterface.click);
    }
}
