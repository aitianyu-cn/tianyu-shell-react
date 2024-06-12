/** @format */

import { ITianyuStoreInterface } from "@aitianyu.cn/tianyu-store";
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
import { IReactRadioButtonState } from "model/control/RadioButton";

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

RadioButtonInterface as ITianyuStoreInterface<IReactRadioButtonState>;
