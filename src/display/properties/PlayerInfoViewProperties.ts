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
        this.position = new PIXI.Point(510, 800);
        this.backgroundProperties = new SpriteProperties(GameStyle.NAVIGATION_BAR);
        this.stakeFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.STAKE, new PIXI.Point(290, 40), new PIXI.Point(10, 25), AlignConstants.LEFT);
        this.balanceFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.BALANCE, new PIXI.Point(290, 40), new PIXI.Point(450, 25));
        this.totalWinFieldProperties = new TextFieldProperties(FontStyle.PLAYER_INFO, GameLang.TOTAL_WIN, new PIXI.Point(290, 40), new PIXI.Point(890, 25), AlignConstants.RIGHT);
    }
}