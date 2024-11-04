/** @format */

export type NavigatorDisplayType = "horizontal" | "vertical" | "narrow";

export interface INavigationItemBaseProperty {
    id: string;
    containerId: string;
}

export interface INavigationItemProperty extends INavigationItemBaseProperty {}

export interface INavigationViewItemProperty extends INavigationItemBaseProperty {}

export interface INavigationListProperty extends INavigationItemBaseProperty {}

export interface INavigatorProperty {}
