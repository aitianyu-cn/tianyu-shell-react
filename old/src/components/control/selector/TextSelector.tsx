/** @format */

import React from "react";
import { TianyuElement } from "components/TianyuElement";
import { IReactSelectorProperty, IReactSelectorState, ReactSelectorStoreType } from "model/control/Selector";
import { Missing, TianyuStoreEntityInterfaceExpose, Unsubscribe } from "@aitianyu.cn/tianyu-store";
import { TianyuShellStore } from "@aitianyu.cn/tianyu-shell/core";
import { SelectorInterface } from "./Interface";

export class TextSelector extends TianyuElement<IReactSelectorProperty, IReactSelectorState> {
    private unsubscribeSelectionChange: Unsubscribe;

    public constructor(props: IReactSelectorProperty) {
        super(ReactSelectorStoreType, props);

        this.unsubscribeSelectionChange = () => undefined;
    }

    public override componentDidMount(): void {
        void TianyuShellStore.getStore()
            .dispatch(
                TianyuStoreEntityInterfaceExpose["tianyu-store-entity-core"].action.createInstanceIfNotExist(
                    this.props.instanceId,
                    {
                        options: this.props.options,
                        default: this.props.default,
                        current: this.props.default,
                    },
                ),
            )
            .then(() => {
                this.unsubscribeSelectionChange = TianyuShellStore.getStore().subscribe(
                    SelectorInterface.getCurrent(this.props.instanceId),
                    this.onCurrentSelectionChange.bind(this),
                );
                this.setLoaded();
            });
    }

    public override componentWillUnmount(): void {
        this.setUnload();
        this.unsubscribeSelectionChange();
        void TianyuShellStore.getStore().dispatch(
            TianyuStoreEntityInterfaceExpose["tianyu-store-entity-core"].action.destroyInstanceIfExist(this.props.instanceId),
        );
    }

    public override render(): React.ReactNode {
        if (!this.isLoaded()) {
            return <div></div>;
        }

        const selectorInfo = TianyuShellStore.getStore().selecte(SelectorInterface.internal._stateInfo(this.props.instanceId));
        if (selectorInfo instanceof Missing || !this.validateState(selectorInfo)) {
            return <div></div>;
        }

        const basicStyle = this.props.style || {};
        basicStyle.width = this.props.width ? `${this.props.width}px` : basicStyle.width;

        return (
            <div>
                <select
                    style={{ ...basicStyle }}
                    key={this.props.instanceId.id}
                    value={selectorInfo.current || selectorInfo.default}
                    onChange={this.onSelectionChange.bind(this)}>
                    {selectorInfo.options.map((pair) => (
                        <option style={this.props.optionStyle?.style} key={pair.key} value={pair.key}>
                            {pair.value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    private onSelectionChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = event.target.selectedIndex;
        const selectedValue = TianyuShellStore.getStore().selecte(
            SelectorInterface.internal._getOptionByIndex(this.props.instanceId, selectedIndex),
        );
        if (selectedValue instanceof Missing) {
            return;
        }

        void TianyuShellStore.getStore().dispatch(SelectorInterface.change(this.props.instanceId, selectedValue));
    }

    private onCurrentSelectionChange(): void {
        this.forceUpdate();
    }

    private validateState(state: IReactSelectorState): boolean {
        return Boolean(state.options.length > 0 && state.default);
    }
}
