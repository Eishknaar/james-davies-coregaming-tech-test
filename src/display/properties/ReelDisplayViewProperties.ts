import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {SpriteProperties} from "../../abstract/display/properties/SpriteProperties";
import {GameStyle} from "../../style/GameStyle";
import {PanelProperties} from "../../abstract/display/properties/PanelProperties";

export class ReelDisplayViewProperties extends AbstractViewProperties {

    public numberOfReels: number
    public panelProperties: PanelProperties
    public spriteProperties: SpriteProperties

    constructor(position: PIXI.Point){
        super(position);
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.numberOfReels = 3;
        this.panelProperties = new PanelProperties(1, 3, 5, 5);
        // this.spriteProperties = new SpriteProperties(GameStyle.BANANA);
    }

}