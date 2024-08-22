/** @format */

import { KeyValuePair } from "@aitianyu.cn/types";
import { ITianyuReactState } from "./State";
import { IterableType } from "@aitianyu.cn/tianyu-store";

export interface ICommonSelectorState extends ITianyuReactState {
    items: KeyValuePair<string, string>[];
}

export interface IDropdownSelectorState extends ICommonSelectorState {
    selected: string;
}

export interface ISelectorState extends ICommonSelectorState {
    selected: string[];
}

export interface ITreeSelectorNode extends IterableType {
    text: string;
    child: KeyValuePair<string, ITreeSelectorNode>[];
    valid: boolean;
}

export interface ITreeSelectorState extends ITianyuReactState {
    items: KeyValuePair<string, ITreeSelectorNode>[];
}

const test: ITreeSelectorState = {
    items: [
        {
            key: "[2022]",
            value: {
                text: "2022",
                valid: true,
                child: [
                    {
                        key: "[2022][Q1]",
                        value: {
                            text: "Q1",
                            valid: true,
                            child: [
                                {
                                    key: "[2022][Q1][01]",
                                    value: {
                                        text: "Jan",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q1][02]",
                                    value: {
                                        text: "Feb",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q1][03]",
                                    value: {
                                        text: "Mar",
                                        valid: true,
                                        child: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        key: "[2022][Q2]",
                        value: {
                            text: "Q2",
                            valid: true,
                            child: [
                                {
                                    key: "[2022][Q2][04]",
                                    value: {
                                        text: "Apr",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q2][05]",
                                    value: {
                                        text: "May",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q2][06]",
                                    value: {
                                        text: "Jun",
                                        valid: true,
                                        child: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        key: "[2022][Q3]",
                        value: {
                            text: "第三季度",
                            valid: true,
                            child: [
                                {
                                    key: "[2022][Q3][07]",
                                    value: {
                                        text: "Jul",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q3][08]",
                                    value: {
                                        text: "Aug",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q3][09]",
                                    value: {
                                        text: "Sep",
                                        valid: true,
                                        child: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        key: "[2022][Q4]",
                        value: {
                            text: "Q4",
                            valid: true,
                            child: [
                                {
                                    key: "[2022][Q4][10]",
                                    value: {
                                        text: "Oct",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q4][11]",
                                    value: {
                                        text: "Nov",
                                        valid: true,
                                        child: [],
                                    },
                                },
                                {
                                    key: "[2022][Q4][12]",
                                    value: {
                                        text: "Dec",
                                        valid: true,
                                        child: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
    enable: false,
};
