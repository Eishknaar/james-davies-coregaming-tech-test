import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {GameStyle} from "../../style/GameStyle";
import {ButtonProperties} from "../../abstract/display/properties/ButtonProperties";
import {FontStyle} from "../../style/FontStyle";
import {GameLang} from "../../style/GameLang";

export class ControlPanelViewProperties extends AbstractViewProperties {

    public spinButtonProperties: ButtonProperties;

    constructor() {
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.spinButtonProperties = new ButtonProperties(GameStyle.SPIN_BUTTON, FontStyle.SPIN_BUTTON, GameLang.SPIN_BUTTON, new PIXI.Point(750, 350));
        this.spinButtonProperties.setDebug(false);
    }
}