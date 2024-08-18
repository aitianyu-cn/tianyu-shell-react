/** @format */

import React from "react";
import { getDefaultDropdownSelectorState } from "handler/selector/DropdownSelectorHandler";
import { ControlledElement } from "model/ControlledElement";
import { IDropdownSelectorPorts } from "model/interface/SelectorInterface";
import { IDropdownSelectorState } from "model/store/SelectorState";
import { ReactControlledProperty } from "types/TianyuElement";
import { IDropdownSelectorProperty } from "types/widget/Selector";

export class DropdownSelector extends ControlledElement<
    IDropdownSelectorPorts,
    IDropdownSelectorProperty,
    IDropdownSelectorState
> {
    public constructor(prop: ReactControlledProperty<IDropdownSelectorPorts, IDropdownSelectorProperty>) {
        super(prop, getDefaultDropdownSelectorState(prop));
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
        const basicStyle = this.props.style || {};
        basicStyle.width = this.props.width ? `${this.props.width}px` : basicStyle.width;

        return (
            <div>
                <select
                    style={{ ...basicStyle }}
                    key={this.props.instanceId.id}
                    value={this.getState.selected}
                    onChange={this.onSelectionChange.bind(this)}>
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
    }
}
