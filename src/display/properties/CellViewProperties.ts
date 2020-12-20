import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {GameStyle} from "../../style/GameStyle";
import {SpriteProperties} from "../../abstract/display/properties/SpriteProperties";
import {AnimatedSpriteProperties} from "../../abstract/display/properties/AnimatedSpriteProperties";

export class CellViewProperties extends AbstractViewProperties {

    public symbolProperties: SpriteProperties;
    public animatedSpriteProperties: AnimatedSpriteProperties;

    constructor(){
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.symbolProperties = new SpriteProperties(GameStyle.REEL_SYMBOL);
        this.animatedSpriteProperties = new AnimatedSpriteProperties(GameStyle.SPIN_ANIMATION, 6, true);
    }

}