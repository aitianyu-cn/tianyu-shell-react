/**@format */

import { getTextFromFile } from "infra/Message";

export namespace MessageBundle {
    export function getText(id: string, args?: (string | number)[] | string): string {
        return getTextFromFile("common", "components/i18n/message", id, args);
    }
}
