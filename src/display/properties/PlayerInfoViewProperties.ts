import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {SpriteProperties} from "../../abstract/display/properties/SpriteProperties";
import {TextFieldProperties} from "../../abstract/display/properties/TextFieldProperties";
import {FontStyle} from "../../style/FontStyle";
import {GameLang} from "../../style/GameLang";
import {GameStyle} from "../../style/GameStyle";
import {AlignConstants} from "../../abstract/constants/AlignConstants";

export class PlayerInfoViewProperties extends AbstractViewProperties {

    public backgroundProperties: SpriteProperties;
    public stakeFieldProperties: TextFieldProperties;
    public balanceFieldProperties: TextFieldProperties;
    public totalWinFieldProperties: TextFieldProperties;

    constructor() {
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.backgroundProperties = new SpriteProperties(GameStyle.NAVIGATION_BAR);
        this.stakeFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.STAKE, new PIXI.Point(150, 40), new PIXI.Point(10, 5));
        this.balanceFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.BALANCE, new PIXI.Point(200, 40), new PIXI.Point(165, 5));
        this.totalWinFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.TOTAL_WIN, new PIXI.Point(350, 40), new PIXI.Point(370, 5));
    }
}