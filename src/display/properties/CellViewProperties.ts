import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {GameStyle} from "../../style/GameStyle";
import {SpriteProperties} from "../../tools/properties/SpriteProperties";
import {AnimatedSpriteProperties} from "../../tools/properties/AnimatedSpriteProperties";

export class CellViewProperties extends AbstractViewProperties {

    public symbolProperties: SpriteProperties;
    public animatedSpriteProperties: AnimatedSpriteProperties;

    constructor(){
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.symbolProperties = new SpriteProperties(GameStyle.BANANA);
        this.animatedSpriteProperties = new AnimatedSpriteProperties(GameStyle.SPIN_ANIMATION, 6, true);
    }

}