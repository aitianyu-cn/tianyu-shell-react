/** @format */

import { getTextFromFile } from "./message/Message";

export namespace MessageBundle {
    export function getText(key: string, params?: (string | number)[] | string, fallString?: string): string {
        return getTextFromFile(key, params, fallString);
    }
}
