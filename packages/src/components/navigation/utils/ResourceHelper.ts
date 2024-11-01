/** @format */

import REACT_NAVIGATION_MENU_ICON from "../res/menu.svg";

const REACT_NAVIGATION_IOS_MENU_ICON_LIGHT = require("../res/menu_light.png");
const REACT_NAVIGATION_IOS_MENU_ICON_DARK = require("../res/menu_dark.png");

export const Resource = {
    html: {
        MenuIcon: { __html: REACT_NAVIGATION_MENU_ICON },
    },
    src: {
        IOS: {
            MenuIcon: {
                Dark: REACT_NAVIGATION_IOS_MENU_ICON_DARK.default,
                LIGHT: REACT_NAVIGATION_IOS_MENU_ICON_LIGHT.default,
            },
        },
    },
};
