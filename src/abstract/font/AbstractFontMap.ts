import {Dictionary} from "../display/view/Dictionary";
import {Font} from "./Font";
import {FontColour} from "./FontColour";

export class AbstractFontMap {

    private fontMaps: Dictionary<string, any>;

    constructor() {
        this.initialise();
        this.createFontMaps();
    }

    protected initialise(): void {
        this.fontMaps = new Dictionary<string, any>();
    }

    protected createFontMaps(): void {

    }

    protected addStyle(fontStyle: string, fontFamily: string, size: number, colour: FontColour): Font {
        let font: Font = new Font(fontFamily, size, colour);
        this.fontMaps.set(fontStyle, font);
        return font;
    }

    public getFont(fontStyle: string): Font {
        return this.fontMaps.getValue(fontStyle);
    }
}