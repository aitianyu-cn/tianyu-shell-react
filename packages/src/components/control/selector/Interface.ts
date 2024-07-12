/** @format */

import { IReactSelectorState, ReactSelectorStoreType } from "model/control/Selector";
import {
    AddSelectorOptionsAction,
    ChangeCurrentSelectionAction,
    ChangeDefaultSelectionAction,
    CreateSelectorAction,
    DeleteSelectorOptionsAction,
    DestroySelectorAction,
    ResetSelectionAction,
} from "./Action";
import {
    GetCurrentSelectionSelector,
    GetDefaultSelectionSelector,
    GetOptionHasSelectorKey,
    GetOptionKeyByIndex,
    GetOptionValueSelector,
    GetSelectorInfo,
    GetSelectorOptionKeys,
    RemoveSelectorKeyFromOptions,
    ValidateSelectionSelector,
} from "./Select";
import { ActionFactor, ITianyuStoreInterface, SelectorFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { KeyValuePair } from "@aitianyu.cn/types";

export const SelectorInterface = {
    core: {
        creator: CreateSelectorAction,
        destroy: DestroySelectorAction,
    },

    internal: {
        _changeDefault: ChangeDefaultSelectionAction,

        _validateSelection: ValidateSelectionSelector,
        _getOptionHasKey: GetOptionHasSelectorKey,
        _removeKeyFromOption: RemoveSelectorKeyFromOptions,
        _stateInfo: GetSelectorInfo,
        _getOptionByIndex: GetOptionKeyByIndex,
    },

    add: AddSelectorOptionsAction,
    del: DeleteSelectorOptionsAction,
    change: ChangeCurrentSelectionAction,
    reset: ResetSelectionAction,

    getOptionKeys: GetSelectorOptionKeys,
    getValue: GetOptionValueSelector,
    getDefault: GetDefaultSelectionSelector,
    getCurrent: GetCurrentSelectionSelector,
};

export const SelectorExpose = {
    add: ActionFactor.makeVirtualAction<IReactSelectorState, KeyValuePair<string, string>[]>(),
    del: ActionFactor.makeVirtualAction<IReactSelectorState, KeyValuePair<string, string>[]>(),
    change: ActionFactor.makeVirtualAction<IReactSelectorState, string>(),
    reset: ActionFactor.makeVirtualAction<IReactSelectorState, void>(),

    getOptionKeys: SelectorFactor.makeVirtualSelector<IReactSelectorState, string[]>(),
    getValue: SelectorFactor.makeVirtualParameterSelector<IReactSelectorState, string, string | null>(),
    getDefault: SelectorFactor.makeVirtualSelector<IReactSelectorState, string>(),
    getCurrent: SelectorFactor.makeVirtualSelector<IReactSelectorState, string>(),
};

SelectorInterface as ITianyuStoreInterface<IReactSelectorState>;
StoreUtils.registerExpose(SelectorExpose, ReactSelectorStoreType);
