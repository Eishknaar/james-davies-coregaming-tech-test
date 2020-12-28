import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {CellViewProperties} from "../properties/CellViewProperties";
import {AnimatedSprite} from "../../abstract/display/view/AnimatedSprite";

export class CellView extends AbstractGameView {

    protected properties: CellViewProperties;
    protected spinAnimation: AnimatedSprite;
    protected symbol: AnimatedSprite;

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <CellViewProperties>properties;
    }

    protected create(): void {
        super.create();
        this.createSymbol();
        this.createSpinAnim();
    }

    protected createSymbol(): void {
        this.symbol = new AnimatedSprite(this.properties.symbolProperties);
        this.addChild(this.symbol);
    }

    protected createSpinAnim(): void {
        this.spinAnimation = new AnimatedSprite(this.properties.animatedSpriteProperties);
        this.spinAnimation.setAnimationSpeed(0.3)
        this.spinAnimation.visible = false;
        this.addChild(this.spinAnimation);
    }

    public spin(): void {
        this.symbol.visible = false;
        this.spinAnimation.visible = true;
        this.spinAnimation.play();
    }

    public stop(symbol: number): void {
        this.symbol.gotoAndStop(symbol);
        this.symbol.visible = true;
        this.spinAnimation.visible = false;
    }


}
