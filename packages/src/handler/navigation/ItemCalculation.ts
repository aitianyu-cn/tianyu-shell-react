/** @format */

export const NAVIGATION_ITEM_DEFAULT_HEIGHT: number = 50;

export const NAVIGATION_ITEM_DEFAULT_SIZE: number = 25;
export const NAVIGATION_ITEM_SIDE_PADDING: number = 15;

export function calculateItemWidth(text: string, contextOrFontsize: CanvasRenderingContext2D | number): number {
    if (typeof contextOrFontsize === "number") {
        return text.length * contextOrFontsize + NAVIGATION_ITEM_SIDE_PADDING * 2;
    }

    return contextOrFontsize.measureText(text).width + NAVIGATION_ITEM_SIDE_PADDING * 2;
}
