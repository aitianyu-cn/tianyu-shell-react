/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { renderCheckboxButton, renderNormalButton, renderRadioButton, renderToggleButton } from "./render/RenderButton";
import { renderCheckboxSelector, renderDropdownSelector } from "./render/RenderSelector";

import "./style.css";

export async function App(div: HTMLElement): Promise<void> {
    const root = ReactDOM.createRoot(div);
    root.render(
        <div style={{ overflow: "scroll", overflowX: "hidden", height: "100vh" }}>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                <div>{await renderToggleButton()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
                <div>{await renderNormalButton()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
                <div>{await renderRadioButton()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
                <div>{await renderCheckboxButton()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
            </div>
            <div></div>
            <div style={{ width: "100%", height: "fit-content", backgroundColor: "#AAAAAA", margin: 10 }}>
                <div>{await renderDropdownSelector()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
                <div>{await renderCheckboxSelector()}</div>
                <div style={{ height: 1, margin: 10, backgroundColor: "#eeeeee" }}></div>
            </div>
        </div>,
    );
}
