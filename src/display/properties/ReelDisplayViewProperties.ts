import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {SpriteProperties} from "../../tools/properties/SpriteProperties";
import {GameStyle} from "../../style/GameStyle";

export class ReelDisplayViewProperties extends AbstractViewProperties {

    public rows: number
    public columns: number;
    public spriteProperties: SpriteProperties

    constructor(position: PIXI.Point){
        super(position);
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.columns = 5;
        this.rows = 2;
        this.spriteProperties = new SpriteProperties(GameStyle.BANANA);
    }

}