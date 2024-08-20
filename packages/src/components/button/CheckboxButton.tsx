/** @format */

import { ICheckboxButtonProperty } from "types/widget/Button";
import { ButtonBase } from "./ButtonBase";
import { ReactControlledProperty } from "types/TianyuElement";
import { getDefaultCheckboxButtonState } from "handler/button/ButtonHandler";
import { ButtonInterfaceTemplate } from "model/store/template/ButtonTemplate";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { checkboxButtonStylingGenerator, getCheckboxButtonStateFromStore } from "handler/button/CheckboxButtonHandler";

export class CheckboxButton extends ButtonBase<ICheckboxButtonProperty> {
    private customEnable: boolean;

    public constructor(prop: ReactControlledProperty<ICheckboxButtonProperty>) {
        super(prop, getDefaultCheckboxButtonState(prop));

        this.customEnable = false;
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(
            this.props.group
                ? ButtonInterfaceTemplate.react.widget.button.checkbox.state(this.instanceId, {
                      group: this.props.group,
                      id: this.props.id,
                  })
                : ButtonInterfaceTemplate.react.widget.button.checkbox.state(this.instanceId, this.id),
        );
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }

    public override render(): React.ReactNode {
        const state = this.supportSubscribe ? this.getState : getCheckboxButtonStateFromStore(this.props);
        const styling = checkboxButtonStylingGenerator(this.props, state.enable, state.selected);

        this.customEnable = !this.supportSubscribe && state.enable;

        return (
            <div style={styling.baseStyle} onClick={isMobile() ? this.onClick.bind(this) : undefined} key={this.id}>
                <div style={styling.containerStyle} onClick={isMobile() ? undefined : this.onClick.bind(this)}>
                    <div style={styling.buttonStyle} />
                </div>
                <div style={styling.textStyle}>{state.text}</div>
            </div>
        );
    }
    private onClick(): void {
        if (!this.shoudHandleClick() && !this.customEnable) {
            return;
        }

        this.store.dispatch(
            this.props.group
                ? ButtonInterfaceTemplate.react.widget.button.checkbox.click(this.instanceId, {
                      group: this.props.group,
                      id: this.id,
                  })
                : ButtonInterfaceTemplate.react.widget.button.checkbox.click(this.instanceId, this.id),
        );
    }
}
