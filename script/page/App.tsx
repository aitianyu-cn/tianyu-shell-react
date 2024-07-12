/** @format */

import { Components } from "index";
import React from "react";
import ReactDOM from "react-dom/client";

export function App(div: HTMLElement): void {
    const root = ReactDOM.createRoot(div);
    const instanceId = Components.Control.InstanceId.createSelector();
    root.render(
        <div style={{ width: "100%", height: "100%", backgroundColor: "#AAAAAA" }}>
            <Components.Control.TextSelector
                instanceId={instanceId}
                options={[
                    { key: "1", value: "option 1" },
                    { key: "2", value: "option 2" },
                    { key: "3", value: "option 3" },
                    { key: "4", value: "option 4" },
                    { key: "5", value: "option 5" },
                ]}
                default="2"
            />
        </div>,
    );
}
