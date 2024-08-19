/** @format */

import { ActionFactor, StoreUtils } from "@aitianyu.cn/tianyu-store";
import { AppStoreState, INormalButtonState, IToggleButtonState } from "../StoreState";
import { ObjectHelper } from "@aitianyu.cn/types";

export const AddToggleButtonAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { id: string } & IToggleButtonState
>().withReducer(function (state, toggleButton) {
    return StoreUtils.State.getNewState(state, ["buttons", "toggleButton"], {
        ...state.buttons.toggleButton,
        [toggleButton.id]: toggleButton,
    });
});

export const EnableToggleButtonAction = ActionFactor.makeActionCreator<AppStoreState, string>().withReducer(function (state, id) {
    return StoreUtils.State.getNewState(state, ["buttons", "toggleButton", id, "enable"], true);
});

export const SwitchToggleButtonAction = ActionFactor.makeActionCreator<AppStoreState, string>().withReducer(function (state, id) {
    return StoreUtils.State.getNewState(
        state,
        ["buttons", "toggleButton", id, "selected"],
        !state.buttons.toggleButton[id].selected,
    );
});

export const AddNormalButtonAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { id: string } & INormalButtonState
>().withReducer(function (state, button) {
    return StoreUtils.State.getNewState(state, ["buttons", "button"], {
        ...state.buttons.button,
        [button.id]: button,
    });
});

export const EnableNormalButtonAction = ActionFactor.makeActionCreator<AppStoreState, string>().withReducer(function (state, id) {
    return StoreUtils.State.getNewState(state, ["buttons", "button", id, "enable"], true);
});

export const ClickNormalButtonAction = ActionFactor.makeActionCreator<AppStoreState, string>().withReducer(function (state, id) {
    return StoreUtils.State.getNewState(state, ["buttons", "button", id, "count"], state.buttons.button[id].count + 1);
});

export const AddRadioGroupAction = ActionFactor.makeActionCreator<
    AppStoreState,
    { group: string; default?: string }
>().withReducer(function (state, data) {
    return StoreUtils.State.getNewState(state, ["buttons", "radioButton"], {
        ...state.buttons.radioButton,
        [data.group]: {
            radios: {},
            disabled: [],
            active: data.default || "",
        },
    });
});
export const JoinRadioButtonGroupAction = ActionFactor.makeActionCreator<
    AppStoreState,
    {
        group: string;
        info: { id: string; text: string; disable: boolean };
    }
>().withReducer(function (state, button) {
    const newState = ObjectHelper.clone(state) as AppStoreState;
    newState.buttons.radioButton[button.group].radios[button.info.id] = button.info.text;
    if (button.info.disable) {
        newState.buttons.radioButton[button.group].disabled.push(button.info.id);
    }
    return newState;
});
export const EnableRadioButtonAction = ActionFactor.makeActionCreator<AppStoreState, { group: string; id: string }>().withReducer(
    function (state, data) {
        return StoreUtils.State.getNewState(
            state,
            ["buttons", "radioButton", data.group, "disabled"],
            state.buttons.radioButton[data.group].disabled.filter((disables) => disables !== data.id),
        );
    },
);
export const SelectRadioButtonAction = ActionFactor.makeActionCreator<AppStoreState, { group: string; id: string }>().withReducer(
    function (state, data) {
        return StoreUtils.State.getNewState(state, ["buttons", "radioButton", data.group, "active"], data.id);
    },
);
