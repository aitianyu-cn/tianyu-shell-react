/** @format */

import React from "react";
import { getDefaultNavigationItemState } from "handler/navigation/ItemHandler";
import { ControlledElement } from "model/ControlledElement";
import { INavigationItemState } from "model/store/NavigationState";
import { NavigationItemInterfaceTemplate, NavigatorInterfaceTemplate } from "model/store/template/NavigationTemplate";
import { ReactControlledProperty } from "types/TianyuElement";
import { INavigationItemProperty, NavigatorDisplayType } from "types/widget/Navigation";
import { navigationItemButtonStylingGenerator } from "handler/navigation/ItemButtonHandler";

export class NavigationItem extends ControlledElement<INavigationItemProperty, INavigationItemState> {
    public constructor(prop: ReactControlledProperty<INavigationItemProperty>) {
        super(prop, getDefaultNavigationItemState(prop));
    }

    public override elementAfterLoaded(): void {
        this.subscribeStateChange(
            NavigationItemInterfaceTemplate.react.widget.navigator.button.state(this.instanceId, {
                containerId: this.props.containerId,
                id: this.id,
            }),
        );
    }

    public override elementBeforeUnload(): void {
        this.unsubscribeStateChange();
    }

    public render(): React.ReactNode {
        const displayState = this.store.selecteWithThrow(
            NavigatorInterfaceTemplate.react.widget.navigator.container.displayType(this.parent, this.props.containerId),
        );

        return this.renderInternal(displayState.type, displayState.expand);
    }

    private renderInternal(displayType: NavigatorDisplayType, expand: boolean): React.ReactNode {
        const displayText: boolean =
            (displayType !== "vertical" || expand) && (displayType !== "horizontal" || !this.getState.assist);
        const displayIcon: boolean =
            displayType === "narrow" || displayType === "vertical" || (displayType === "horizontal" && this.getState.assist);

        const styling = navigationItemButtonStylingGenerator(this.props);

        return (
            <div key={this.id} onClick={this.onClick.bind(this)} style={styling.rootContainerStyling}>
                {displayIcon ? (
                    this.getState.type === "url" ? (
                        <img src={this.getState.icon} alt={this.getState.text} style={styling.iconStyling} />
                    ) : (
                        <div dangerouslySetInnerHTML={this.getState.icon} style={styling.iconStyling} />
                    )
                ) : undefined}
                {displayText ? <div style={styling.fontStyling}>{this.getState.text}</div> : undefined}
            </div>
        );
    }

    private onClick(): void {
        this.store.dispatch(
            NavigationItemInterfaceTemplate.react.widget.navigator.button.click(this.instanceId, {
                containerId: this.props.containerId,
                id: this.id,
            }),
        );
    }
}
