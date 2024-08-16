/** @format */

import React from "react";
import {
    InstanceId,
    IStore,
    Missing,
    StoreUtils,
    TianyuStoreEntityInterfaceExpose,
    Unsubscribe,
} from "@aitianyu.cn/tianyu-store";
import { IReactRadioButtonProperty, IReactRadioButtonState, ReactRadioButtonStoreType } from "model/control/RadioButton";
import { RadioButtonInterface } from "./Interface";
import { isMobile, TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { Property } from "csstype";
import { TianyuElement } from "components/TianyuElement";

export class ReactRadioButtonBase extends TianyuElement<IReactRadioButtonProperty, IReactRadioButtonState> {
    protected readonly store: IStore;
    protected readonly instanceId: InstanceId;
    protected readonly id: string;

    protected unsubscribe: Unsubscribe;

    protected createStatePromise: Promise<void>;

    public constructor(props: IReactRadioButtonProperty) {
        super(ReactRadioButtonStoreType, props);

        this.store = TianyuShellStore.getStore();
        this.instanceId = props.instanceId;
        this.id = props.id;
        this.unsubscribe = () => {};

        this.createStatePromise = this.createRadioButtonState().then(() => {
            this.setLoaded();
        });
    }

    public override componentWillUnmount(): void {
        this.unsubscribe();

        this.store.dispatch(
            StoreUtils.createBatchAction([
                RadioButtonInterface.leave(this.instanceId, this.id),
                RadioButtonInterface.destroyIfEmpty(this.instanceId),
            ]),
        );
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

    private async createRadioButtonState(): Promise<void> {
        await this.store.dispatch(
            TianyuStoreEntityInterfaceExpose["tianyu-store-entity-core"].action.createInstanceIfNotExist(
                this.instanceId,
                this.props.defaultSelection,
            ),
        );
    }

    protected onSelect(): void {
        //
    }

    protected isSelected(): boolean {
        const isSelectedWithMissing = this.store.selecte(RadioButtonInterface.isSelected(this.instanceId, this.id));
        const isSelected = !(isSelectedWithMissing instanceof Missing) && isSelectedWithMissing;
        return isSelected;
    }
}
