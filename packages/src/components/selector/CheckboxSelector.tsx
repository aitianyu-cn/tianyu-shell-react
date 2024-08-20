/** @format */

import { ObjectHelper } from "@aitianyu.cn/types";
import { CheckboxButton } from "components/button/CheckboxButton";
import { getDefaultSelectorState } from "handler/selector/SelectorHandler";
import { ControlledElement } from "model/ControlledElement";
import { ISelectorState } from "model/store/SelectorState";
import { CheckboxSelectorInterfaceTemplate } from "model/store/template/SelectorTemplate";
import { ReactControlledProperty } from "types/TianyuElement";
import { ISelectorProperty } from "types/widget/Selector";

export class CheckboxSelector extends ControlledElement<ISelectorProperty, ISelectorState> {
    public constructor(prop: ReactControlledProperty<ISelectorProperty>) {
        super(prop, getDefaultSelectorState(prop));
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(CheckboxSelectorInterfaceTemplate.react.widget.select.checkbox.state(this.instanceId, this.id));
    }
    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }
    public override elementShouldUpdate(previousState: ISelectorState, currentState: ISelectorState): boolean {
        if (this.supportSubscribe) {
            return true;
        }
        if (previousState.enable !== currentState.enable) {
            return true;
        }
        const diff = ObjectHelper.compareObjects(previousState.items, currentState.items);
        return diff === "different";
    }
    public override render(): React.ReactNode {
        return (
            <div key={this.id}>
                {this.getState.items.map((item) => (
                    <CheckboxButton
                        key={item.key}
                        instanceId={this.instanceId}
                        parentInstance={this.parent}
                        store={this.store}
                        id={item.key}
                        group={this.id}
                        style={{ marginTop: "10px", marginBottom: 10 }}
                        subscribeable={!this.supportSubscribe}
                    />
                ))}
            </div>
        );
    }
}
