/** @format */

import { IReactRadioButtonProperty } from "model/control/RadioButton";
import { RadioButtonInterface } from "./Interface";
import { ReactRadioButtonBase } from "./RadioButtonBase";

export class ReactRadioButton extends ReactRadioButtonBase {
    public constructor(props: IReactRadioButtonProperty) {
        super(props);
    }

    public override componentDidMount(): void {
        this.createStatePromise.then(() => {
            if (this.id) {
                this.store.dispatch(RadioButtonInterface.join(this.instanceId, this.id));
                this.unsubscribe = this.store.subscribe(
                    RadioButtonInterface.getCurrent(this.instanceId),
                    this.onSelectionChanged.bind(this),
                );
            }
        });
    }

    protected override onSelect(): void {
        this.store.dispatch(RadioButtonInterface.switch(this.instanceId, this.id));
    }

    private onSelectionChanged(oldSelection: string | undefined, newSelection: string | undefined): void {
        if (newSelection !== this.id && oldSelection !== this.id) {
            return;
        }

        this.forceUpdate();
    }
}
