import {AbstractGameView} from "../../abstract/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {CellViewProperties} from "../properties/CellViewProperties";
import {Sprite} from "../../tools/view/Sprite";
import {AnimatedSprite} from "../../tools/view/AnimatedSprite";

export class CellView extends AbstractGameView {

    protected properties: CellViewProperties;

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <CellViewProperties> properties;
    }

    protected create(): void {
        this.createSymbol();
        this.createSpinAnim();
    }

    protected createSymbol(): void {
        let symbol: Sprite = new Sprite(this.properties.symbolProperties);
        // this.addChild(symbol);
    }

    protected createSpinAnim(): void {
        let anim: AnimatedSprite = new AnimatedSprite(this.properties.animatedSpriteProperties);
        anim.setAnimationSpeed(0.25)
        this.addChild(anim);
        anim.play();
    }
}
