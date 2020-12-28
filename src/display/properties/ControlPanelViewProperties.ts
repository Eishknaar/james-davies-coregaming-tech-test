import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ButtonProperties} from "../../abstract/display/properties/ButtonProperties";
import {VerticalSelectorProperties} from "../../abstract/display/properties/VerticalSelectorProperties";
import {GameStyle} from "../../style/GameStyle";
import {FontStyle} from "../../style/FontStyle";
import {GameLang} from "../../style/GameLang";

export class ControlPanelViewProperties extends AbstractViewProperties {

    public spinButtonProperties: ButtonProperties;
    public stakeSelectorProperties: VerticalSelectorProperties;

    constructor() {
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.spinButtonProperties = new ButtonProperties(GameStyle.SPIN_BUTTON, FontStyle.SPIN_BUTTON, GameLang.SPIN_BUTTON, new PIXI.Point(1350, 380));
        this.stakeSelectorProperties = new VerticalSelectorProperties(GameStyle.SELECTOR_PANEL, GameStyle.STAKE_SELECTOR_BUTTON, FontStyle.STAKE_SELECTOR_BUTTON, GameStyle.STAKE_BUTTON, FontStyle.STAKE_BUTTON, new PIXI.Point(400,650));
        this.stakeSelectorProperties.closeDuration = 0.7;
        this.stakeSelectorProperties.openDuration = 0.7;
    }
}