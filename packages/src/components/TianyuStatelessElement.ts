/**@format */

import { IReactProperty } from "@aitianyu.cn/tianyu-shell/react";
import React from "react";

export class TianyuStatelessElement<P extends IReactProperty> extends React.Component<P, unknown> {
    public constructor(props: P) {
        super(props);
    }
}
