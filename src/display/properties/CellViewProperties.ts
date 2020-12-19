import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {SpriteProperties} from "../../tools/properties/SpriteProperties";
import {GameStyle} from "../../style/GameStyle";

export class CellViewProperties extends AbstractViewProperties {

    public symbolProperties: SpriteProperties;

    constructor(){
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.symbolProperties = new SpriteProperties(GameStyle.BANANA);
    }

}