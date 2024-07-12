/**@format */
import React from "react";
import { IReactProperty, IReactState } from "@aitianyu.cn/tianyu-shell/react";

export class TianyuElement<Prop extends IReactProperty, State extends IReactState> extends React.Component<Prop, State> {
    private loaded: boolean;

    public constructor(_elementType: string, props: Prop) {
        super(props);

        this.loaded = false;
    }

    // ################################################################################
    // Public Export Methods
    // ################################################################################

    // ################################################################################
    // Internal used Methods
    // ################################################################################
    protected setLoaded(): void {
        this.loaded = true;
        this.forceUpdate();
    }

    protected setUnload(): void {
        this.loaded = false;
    }

    protected isLoaded(): boolean {
        return this.loaded;
    }
}
