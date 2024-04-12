/**@format */

import { IReactProperty } from "model/React";
import React from "react";

export class TianyuStatelessElement<P extends IReactProperty> extends React.Component<P, unknown> {
    public constructor(props: P) {
        super(props);
    }
}
