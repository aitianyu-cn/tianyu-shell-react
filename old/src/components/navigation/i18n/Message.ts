/**@format */

import { getTextFromFile } from "infra/Message";

export namespace MessageBundle {
    export function getText(id: string, args?: (string | number)[] | string): string {
        return getTextFromFile("navigator", "components/control/i18n/message", id, args);
    }
}
