/** @format */

import { ActionFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { ArrayHelper } from "@aitianyu.cn/types";
import { KeyValuePair } from "@aitianyu.cn/types/dist/types/types/Types";
import { IReactSelectorState } from "model/control/Selector";
import {
    GetCurrentSelectionSelector,
    GetDefaultSelectionSelector,
    RemoveSelectorKeyFromOptions,
    ValidateSelectionSelector,
} from "./Select";
import { GetOptionHasSelectorKey } from "./Select";

export const CreateSelectorAction = ActionFactor.makeCreateStoreAction<IReactSelectorState, IReactSelectorState>().withReducer(
    function (_state, data) {
        return data;
    },
);

export const DestroySelectorAction = ActionFactor.makeDestroyStoreAction();

export const AddSelectorOptionsAction = ActionFactor.makeActionCreator<
    IReactSelectorState,
    KeyValuePair<string, string>[]
>().withReducer(function (state, data) {
    return StoreUtils.State.getNewState(state, ["options"], ArrayHelper.merge(...state.options, ...data));
});

export const DeleteSelectorOptionsAction = ActionFactor.makeActionCreator<IReactSelectorState, KeyValuePair<string, string>[]>()
    .withHandler(function* (action) {
        const current = yield* StoreUtils.Handler.doSelector(GetCurrentSelectionSelector(action.instanceId));
        const isCurrentDeleted = yield* StoreUtils.Handler.doSelector(
            GetOptionHasSelectorKey(action.instanceId, {
                options: action.params,
                key: current,
            }),
        );

        const defaultSelection = yield* StoreUtils.Handler.doSelector(GetDefaultSelectionSelector(action.instanceId));
        // in this case, current selection is not deleted, to check the default is deleted or not
        if (!isCurrentDeleted) {
            const isDefaultDeleted = yield* StoreUtils.Handler.doSelector(
                GetOptionHasSelectorKey(action.instanceId, {
                    options: action.params,
                    key: defaultSelection,
                }),
            );
            // if default selection is deleted, to set the current as default
            if (isDefaultDeleted) {
                yield* StoreUtils.Handler.doAction(ChangeDefaultSelectionAction(action.instanceId, current));
            }
            return action.params;
        } else {
            // in this case, the current selection is deleted, to set the default as current and remove default from deleted list
            yield* StoreUtils.Handler.doAction(ChangeCurrentSelectionAction(action.instanceId, defaultSelection));
            return yield* StoreUtils.Handler.doSelector(
                RemoveSelectorKeyFromOptions(action.instanceId, {
                    options: action.params,
                    key: defaultSelection,
                }),
            );
        }
    })
    .withReducer(function (state, data) {
        return StoreUtils.State.getNewState(
            state,
            ["options"],
            state.options.filter((rawPair) => {
                return !Boolean(data.find((deletedPair) => deletedPair.key === rawPair.key));
            }),
        );
    });

export const ChangeDefaultSelectionAction = ActionFactor.makeActionCreator<IReactSelectorState, string>().withReducer(function (
    state,
    data,
) {
    return StoreUtils.State.getNewState(state, ["default"], data);
});

export const ChangeCurrentSelectionAction = ActionFactor.makeActionCreator<IReactSelectorState, string>()
    .withHandler(function* (action) {
        const isSelectionValid = StoreUtils.Handler.doSelector(ValidateSelectionSelector(action.instanceId, action.params));
        return isSelectionValid ? action.params : null;
    })
    .withReducer(function (state, selection) {
        return StoreUtils.State.getNewState(state, ["current"], selection === null ? state.current : selection);
    });

export const ResetSelectionAction = ActionFactor.makeActionCreator<IReactSelectorState>().withReducer(function (state) {
    return StoreUtils.State.getNewState(state, ["current"], state.default);
});
