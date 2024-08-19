/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { renderNormalButton, renderRadioButton, renderToggleButton } from "./render/RenderButton";
import { renderDropdownSelector } from "./render/RenderSelector";

import "./style.css";

export async function App(div: HTMLElement): Promise<void> {
    const root = ReactDOM.createRoot(div);
    root.render(
        <div>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                {await renderToggleButton()}
            </div>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                {await renderNormalButton()}
            </div>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                {await renderRadioButton()}
            </div>
            <div></div>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                {await renderDropdownSelector()}
            </div>
        </div>,
    );
}
