/** @format */

import React from "react";
import { TianyuElement } from "components/TianyuElement";
import { IReactSelectorProperty, IReactSelectorState, ReactSelectorStoreType } from "model/control/Selector";

export class Selector extends TianyuElement<IReactSelectorProperty, IReactSelectorState> {
    public constructor(props: IReactSelectorProperty) {
        super(ReactSelectorStoreType, props);
    }
}
