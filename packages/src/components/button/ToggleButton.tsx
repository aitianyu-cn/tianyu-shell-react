/** @format */

import React from "react";
import { IButtonTemplateState } from "model/store/ButtonState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IToggleButtonProperty } from "types/widget/Button";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { toggleButtonStylingGenerator } from "handler/button/ToggleButtonHandler";
import { ButtonBase } from "./ButtonBase";
import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";
import { getDefaultToggleButtonState } from "handler/button/ButtonHandler";

export class ToggleButton extends ButtonBase {
    private selfSize: number;
    private selfAdditionLenght: number;
    private selfMarginLeft: number;
    private selfBorderRadio: number;

    public constructor(prop: ReactControlledProperty<IToggleButtonProperty>) {
        super(prop, getDefaultToggleButtonState(prop));

        this.selfSize = this.props.size || Number(this.props.style?.height) || 50;
        this.selfAdditionLenght = this.props.lineLength || this.selfSize / 4;
        this.selfMarginLeft = this.getState.selected ? this.selfSize + this.selfAdditionLenght : 0;
        this.selfBorderRadio =
            typeof this.props.borderRadio === "number"
                ? this.props.borderRadio
                : typeof this.props.type === "undefined" || this.props.type === "default"
                ? this.selfSize / 2
                : 5;
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(ButtonInterfaceTemplate.react.widget.button.toggle.state(this.instanceId, this.id));
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
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
    public override elementStateChanged(previous: IButtonTemplateState): void {
        const selectionChange = this.getState.selected !== previous.selected;

        if (selectionChange) {
            this.updateToggleFullState();
        } else {
            this.forceUpdate();
        }
    }
    protected override shoudHandleClick(): boolean {
        return this.getState.enable || this.working;
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
        if (!this.shoudHandleClick()) {
            return;
        }

        this.store.dispatch(ButtonInterfaceTemplate.react.widget.button.toggle.click(this.instanceId, this.id));
    }
}
