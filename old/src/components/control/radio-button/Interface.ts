/** @format */

import { ITianyuStoreInterface, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import {
    CreateRadioButtonGroupAction,
    DestroyRadioButtonGroupAction,
    DestroyStateIfNoRadioButton,
    JoinSelectorAction,
    LeaveSelectorAction,
    SelectItemAction,
    SwitchItemAction,
    UnselectItemAction,
} from "./Action";
import { GetAllSelectorsSelector, GetCurrentSelectionSelector, IsSelectedSelector } from "./Select";
import { IReactRadioButtonState, ReactRadioButtonStoreType } from "model/control/RadioButton";

export const RadioButtonInterface = {
    core: {
        creator: CreateRadioButtonGroupAction,
        destroy: DestroyRadioButtonGroupAction,
    },
    join: JoinSelectorAction,
    leave: LeaveSelectorAction,
    select: SelectItemAction,
    switch: SwitchItemAction,
    unselect: UnselectItemAction,
    destroyIfEmpty: DestroyStateIfNoRadioButton,

    getSelectors: GetAllSelectorsSelector,
    getCurrent: GetCurrentSelectionSelector,
    isSelected: IsSelectedSelector,
    getAllSelections: GetAllSelectorsSelector,
};

export const RadioButtonExpose = {
    getSelectors: SelectorFactor.makeVirtualSelector<IReactRadioButtonState, string[]>(),
    getCurrent: SelectorFactor.makeVirtualSelector<IReactRadioButtonState, string>(),
    getAllSelections: SelectorFactor.makeVirtualSelector<IReactRadioButtonState, string[]>(),
};

RadioButtonInterface as ITianyuStoreInterface<IReactRadioButtonState>;
StoreUtils.registerExpose(RadioButtonExpose, ReactRadioButtonStoreType);
