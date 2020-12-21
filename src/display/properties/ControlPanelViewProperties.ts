import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {GameStyle} from "../../style/GameStyle";
import {ButtonProperties} from "../../abstract/display/properties/ButtonProperties";

export class ControlPanelViewProperties extends AbstractViewProperties {
    public spinButtonProperties: ButtonProperties;

    constructor() {
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.spinButtonProperties = new ButtonProperties(GameStyle.SPIN_BUTTON, new PIXI.Point(0, 0));
    }
}