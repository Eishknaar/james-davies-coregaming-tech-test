import {FontStyle} from "../style/FontStyle";
import {FontColours} from "./FontColours";
import {FontStrokes} from "./FontStrokes";
import {FontDropShadows} from "./FontDropShadows";
import {AbstractFontMap} from "../abstract/font/AbstractFontMap";

export class FontMap extends AbstractFontMap{

    public static TAHOMA: string = "Tahoma";

    protected createFontMaps(): void {
        this.addStyle(FontStyle.SPIN_BUTTON, FontMap.TAHOMA, 25, FontColours.RED).addStroke(FontStrokes.YELLOW_2).addDropShadow(FontDropShadows.BLUE_5_90);
        this.addStyle(FontStyle.PLAYER_INFO, FontMap.TAHOMA, 25, FontColours.WHITE);
        this.addStyle(FontStyle.STAKE_SELECTOR_BUTTON, FontMap.TAHOMA, 25, FontColours.WHITE);
        this.addStyle(FontStyle.STAKE_BUTTON, FontMap.TAHOMA, 25, FontColours.WHITE);
    }



}