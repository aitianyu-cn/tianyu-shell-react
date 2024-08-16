/** @format */

import React from "react";
import { IReactRadioButtonProperty } from "model/control/RadioButton";
import { RadioButtonInterface } from "./Interface";
import { isMobile } from "@aitianyu.cn/tianyu-shell/core";
import { Property } from "csstype";
import { ReactRadioButtonBase } from "./RadioButtonBase";

export class MultiSelectionButton extends ReactRadioButtonBase {
    public constructor(props: IReactRadioButtonProperty) {
        super(props);
    }

    public override componentDidMount(): void {
        this.createStatePromise.then(() => {
            if (this.id) {
                this.store.dispatch(RadioButtonInterface.join(this.instanceId, this.id));
                this.unsubscribe = this.store.subscribe(
                    RadioButtonInterface.getAllSelections(this.instanceId),
                    this.onSelectionChanged.bind(this),
                );
            }
        });
    }

    public override render(): React.ReactNode {
        if (!this.isLoaded()) {
            return undefined;
        }

        const size = this.props.size || 16;
        const selectSize = size / 2;

        const radioBaseStyle = {
            display: "flex",
        };
        const radioContainerStyle = {
            marginTop: "auto",
            marginBottom: "auto",
            width: size,
            height: size,
            borderRadius: size,
            border: this.props.border || "1px var(--ts_ui_blk_7) solid",
            backgroundColor: this.props.color || "#ffffff00",
        };
        const radioButtonStyle = {
            width: selectSize,
            height: selectSize,
            borderRadius: selectSize,
            margin: (size - selectSize) / 2,
            opacity: `${this.isSelected() ? "100" : "0"}%`,
            backgroundColor: this.props.selectedColor || "var(--ts_ui_blk_2)",
        };
        const radioTextStyle = {
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: this.props.insideMargin || 10,
            userSelect: "none" as Property.UserSelect,
        };
        return (
            <div style={radioBaseStyle} onClick={isMobile ? this.onSelect.bind(this) : undefined}>
                <div style={radioContainerStyle} onClick={isMobile ? undefined : this.onSelect.bind(this)}>
                    <div style={radioButtonStyle} />
                </div>
                <div style={radioTextStyle}>{this.props.value}</div>
            </div>
        );
    }

    private onSelectionChanged(oldSelection: string[] | undefined, newSelection: string[] | undefined): void {
        if (newSelection?.includes(this.id) && oldSelection?.includes(this.id)) {
            return;
        }

        this.forceUpdate();
    }
    protected onSelect(): void {
        if (this.isSelected()) {
            this.store.dispatch(RadioButtonInterface.unselect(this.instanceId, this.id));
        } else {
            this.store.dispatch(RadioButtonInterface.select(this.instanceId, this.id));
        }
    }
}
