/** @format */

import React from "react";
import { ControlledElement } from "model/ControlledElement";
import { IButtonPortState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IToggleButtonProperty } from "types/widget/Button";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { toggleButtonStylingGenerator } from "handler/button/ToggleButtonHandler";
import { getDefaultButtonState } from "handler/button/ButtonHandler";
import { IButtonPorts } from "model/interface/ButtonInterface";

export class ToggleButton extends ControlledElement<IButtonPorts, IToggleButtonProperty, IButtonPortState> {
    private selfSize: number;
    private selfAdditionLenght: number;
    private selfMarginLeft: number;
    private selfBorderRadio: number;

    public constructor(prop: ReactControlledProperty<IButtonPorts, IToggleButtonProperty>) {
        super(prop, getDefaultButtonState(prop));

        this.selfSize = this.props.size || Number(this.props.style?.height) || 50;
        this.selfAdditionLenght = this.props.lineLenght || this.selfSize / 4;
        this.selfMarginLeft = this.getState.selected ? this.selfSize + this.selfAdditionLenght : 0;
        this.selfBorderRadio =
            typeof this.props.borderRadio === "number"
                ? this.props.borderRadio
                : typeof this.props.type === "undefined" || this.props.type === "default"
                ? this.selfSize / 2
                : 5;
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
        const styles = toggleButtonStylingGenerator(
            this.props,
            this.getState.enable,
            this.selfSize,
            this.selfAdditionLenght,
            this.selfMarginLeft,
            this.selfBorderRadio,
        );

        return (
            <div style={styles.baseStyle}>
                <div style={styles.innerStyle}>
                    <div style={styles.selected} onClick={isMobile() ? this.onClick.bind(this) : undefined}>
                        <div style={styles.buttonStyle} onClick={isMobile() ? undefined : this.onClick.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
    public override onElementStateChange(previous: IButtonPortState): void {
        const selectionChange = this.getState.selected !== previous.selected;

        if (selectionChange) {
            this.updateToggleFullState();
        } else {
            this.forceUpdate();
        }
    }

    private updateToggleFullState(): void {
        if (this.working) {
            return;
        }

        this.setWorking();

        const totalLenght = this.selfSize + this.selfAdditionLenght;
        const step = totalLenght / 30;
        const fnMove = () => {
            if (this.getState.selected && this.selfMarginLeft < this.selfSize + this.selfAdditionLenght) {
                this.selfMarginLeft = this.selfMarginLeft + step > totalLenght ? totalLenght : this.selfMarginLeft + step;
                this.forceUpdate();
                setTimeout(fnMove, 1);
            } else if (!this.getState.selected && this.selfMarginLeft > 0) {
                this.selfMarginLeft = this.selfMarginLeft - step < 0 ? 0 : this.selfMarginLeft - step;
                this.forceUpdate();
                setTimeout(fnMove, 1);
            } else {
                this.setFree();
            }
        };

        fnMove();
    }
    private onClick(): void {
        if (!this.getState.enable || this.working) {
            return;
        }

        this.storeInterface && this.store.dispatch(this.storeInterface.click);
    }
}
