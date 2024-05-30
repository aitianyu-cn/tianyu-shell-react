/**@format */
import { InstanceId, StoreHelper } from "@aitianyu.cn/tianyu-store";
import { guid } from "@aitianyu.cn/types";
import { IReactProperty, IReactState, TianyuShell } from "model/React";
import { ErrorCode } from "model/constant/ErrorCode";
import React from "react";
import { MessageBundle } from "./i18n/Message";

export class TianyuElement<Prop extends IReactProperty, State extends IReactState> extends React.Component<Prop, State> {
    private instanceId: InstanceId;
    private initialState: State | undefined;

    public constructor(elementType: string, props: Prop, state: State | void) {
        super(props);

        const parentInstanceId = String(props["parent"]);
        const elementId = String(props["id"]) || guid();
        this.instanceId = StoreHelper.generateInstanceId(
            parentInstanceId ? StoreHelper.newInstanceId(parentInstanceId) : TianyuShell.core.ui.store.instanceId,
            elementType,
            elementId,
        );
        if (state) {
            this.initialState = state;
        }
    }

    // ################################################################################
    // Public Export Methods
    // ################################################################################

    public getInstanceId(): InstanceId {
        return this.instanceId;
    }

    /**
     * To set a new state into element
     *
     * @deprecated Tianyu Store is used in Tianyu Shell Element, setState should not be used directly
     *
     * @param state new state object or a function to get new state
     * @param callback set state callback after the setState is done
     */
    public override setState(): void {
        throw new Error(MessageBundle.getText(ErrorCode.TIANYU_ELEMENT_NOT_SUPPORT));
    }

    // ################################################################################
    // Internal used Methods
    // ################################################################################
}
