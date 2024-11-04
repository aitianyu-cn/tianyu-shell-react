/** @format */

import { INavigationItemState, INavigationListState, INavigationViewItemState } from "model/store/NavigationState";
import { NavigationItemInterfaceTemplate } from "model/store/template/NavigationTemplate";
import { ReactControlledProperty } from "types/TianyuElement";
import { INavigationItemProperty, INavigationListProperty, INavigationViewItemProperty } from "types/widget/Navigation";

export const DEFAULT_NAVIGATION_FRONT_SIZE = 14;

export function getDefaultNavigationItemState(prop: ReactControlledProperty<INavigationItemProperty>): INavigationItemState {
    try {
        return prop.store.selecteWithThrow(
            NavigationItemInterfaceTemplate.react.widget.navigator.button.state(prop.instanceId, {
                containerId: prop.containerId,
                id: prop.id,
            }),
        );
    } catch {
        return {
            enable: false,
            text: "",
            size: DEFAULT_NAVIGATION_FRONT_SIZE,
            icon: "",
            type: "url",
            index: 0,
            select: false,
            assist: false,
        };
    }
}

export function getDefaultNavigationViewItemState(
    prop: ReactControlledProperty<INavigationViewItemProperty>,
): INavigationViewItemState {
    try {
        return prop.store.selecteWithThrow(
            NavigationItemInterfaceTemplate.react.widget.navigator.view.state(prop.instanceId, {
                containerId: prop.containerId,
                id: prop.id,
            }),
        );
    } catch {
        return {
            enable: false,
            text: "",
            size: DEFAULT_NAVIGATION_FRONT_SIZE,
            icon: "",
            type: "url",
            index: 0,
            assist: false,
        };
    }
}

export function getDefaultNavigationListState(prop: ReactControlledProperty<INavigationListProperty>): INavigationListState {
    try {
        return prop.store.selecteWithThrow(
            NavigationItemInterfaceTemplate.react.widget.navigator.list.state(prop.instanceId, {
                containerId: prop.containerId,
                id: prop.id,
            }),
        );
    } catch {
        return {
            enable: false,
            text: "",
            size: DEFAULT_NAVIGATION_FRONT_SIZE,
            icon: "",
            type: "url",
            index: 0,
            select: false,
            assist: false,
        };
    }
}
