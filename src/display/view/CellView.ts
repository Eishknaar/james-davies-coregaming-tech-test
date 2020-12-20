import {AbstractGameView} from "../../abstract/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {CellViewProperties} from "../properties/CellViewProperties";
import {AnimatedSprite} from "../../tools/view/AnimatedSprite";

export class CellView extends AbstractGameView {

    protected properties: CellViewProperties;
    protected spinAnimation: AnimatedSprite;
    protected symbol: AnimatedSprite;

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <CellViewProperties> properties;
    }

    protected create(): void {
        this.createSymbol();
        this.createSpinAnim();
    }

    protected createSymbol(): void {
        this.symbol= new AnimatedSprite(this.properties.symbolProperties);
        this.addChild(this.symbol);
    }

    protected createSpinAnim(): void {
        this.spinAnimation = new AnimatedSprite(this.properties.animatedSpriteProperties);
        this.spinAnimation.setAnimationSpeed(0.2)
    }
}
