/** @format */

import { ActionFactor, StoreUtils, TianyuStoreEntityInterfaceExpose } from "@aitianyu.cn/tianyu-store";
import { ObjectHelper } from "@aitianyu.cn/types";
import { IReactRadioButtonState } from "model/control/RadioButton";
import { GetAllSelectorsSelector } from "./Select";

export const CreateRadioButtonGroupAction = ActionFactor.makeCreateStoreAction<IReactRadioButtonState, string>().withReducer(
    function (_state, defaultSelect) {
        return {
            selectors: [],
            current: [defaultSelect],
            default: [defaultSelect],
        };
    },
);

export const DestroyRadioButtonGroupAction = ActionFactor.makeDestroyStoreAction();

export const SelectItemAction = ActionFactor.makeActionCreator<IReactRadioButtonState, string>().withReducer(function (
    state,
    selector,
) {
    const newState = ObjectHelper.clone(state) as IReactRadioButtonState;
    if (newState.selectors.includes(selector)) {
        newState.current.push(selector);
    }
    return newState;
});

export const SwitchItemAction = ActionFactor.makeActionCreator<IReactRadioButtonState, string>().withReducer(function (
    state,
    selector,
) {
    const newState = ObjectHelper.clone(state) as IReactRadioButtonState;
    if (newState.selectors.includes(selector)) {
        newState.current = [selector];
    }
    return newState;
});

export const UnselectItemAction = ActionFactor.makeActionCreator<IReactRadioButtonState, string>().withReducer(function (
    state,
    selector,
) {
    const newState = ObjectHelper.clone(state) as IReactRadioButtonState;
    if (newState.current.includes(selector)) {
        newState.current.splice(newState.current.indexOf(selector), 1);
    }
    return newState;
});

export const JoinSelectorAction = ActionFactor.makeActionCreator<IReactRadioButtonState, string>().withReducer(function (
    state,
    selector,
) {
    const newState = ObjectHelper.clone(state) as IReactRadioButtonState;
    if (!newState.selectors.includes(selector)) {
        newState.selectors.push(selector);
    }
    return newState;
});

export const LeaveSelectorAction = ActionFactor.makeActionCreator<IReactRadioButtonState, string>().withReducer(function (
    state,
    selector,
) {
    const newState = ObjectHelper.clone(state) as IReactRadioButtonState;
    newState.selectors.splice(newState.selectors.indexOf(selector), 1);
    if (newState.current.includes(selector)) {
        newState.current.splice(newState.current.indexOf(selector), 1);
    }
    return newState;
});

export const DestroyStateIfNoRadioButton = ActionFactor.makeActionCreator<IReactRadioButtonState>().withHandler(function* (
    action,
) {
    const allSelectors = yield* StoreUtils.Handler.doSelector(GetAllSelectorsSelector(action.instanceId));
    if (allSelectors.length === 0) {
        yield* StoreUtils.Handler.doAction(
            TianyuStoreEntityInterfaceExpose["tianyu-store-entity-core"].action.destroyInstanceIfExist(action.instanceId),
        );
    }
});
