/** @format */

import React from "react";
import { getDefaultDropdownSelectorState } from "handler/selector/DropdownSelectorHandler";
import { ControlledElement } from "model/ControlledElement";
import { IDropdownSelectorState } from "model/store/SelectorState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IDropdownSelectorProperty } from "types/widget/Selector";
import { DropdownSelectorInterfaceTemplate } from "model/store/template/SelectorTemplate";

export class DropdownSelector extends ControlledElement<IDropdownSelectorProperty, IDropdownSelectorState> {
    public constructor(prop: ReactControlledProperty<IDropdownSelectorProperty>) {
        super(prop, getDefaultDropdownSelectorState(prop));
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(DropdownSelectorInterfaceTemplate.react.widget.select.dropdown.state(this.instanceId, this.id));
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }
    public override render(): React.ReactNode {
        const basicStyle = this.props.style || {};
        basicStyle.width = this.props.width ? `${this.props.width}px` : basicStyle.width;

        return (
            <div>
                <select
                    style={{ ...basicStyle }}
                    key={this.id}
                    value={this.getState.selected}
                    onChange={this.onSelectionChange.bind(this)}
                    disabled={!this.getState.enable}>
                    {this.getState.items.map((pair) => (
                        <option style={this.props.optionStyle?.style} key={pair.key} value={pair.key}>
                            {pair.value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    private onSelectionChange(event: React.ChangeEvent<HTMLSelectElement>): void {
        const selectedIndex = event.target.selectedIndex;
        const selectedValue = this.getState.items[selectedIndex].key;
        void this.store.dispatch(
            DropdownSelectorInterfaceTemplate.react.widget.select.dropdown.select(this.instanceId, {
                id: this.id,
                value: selectedValue,
            }),
        );
    }
}
