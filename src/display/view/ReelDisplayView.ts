import {AbstractGameView} from "../../abstract/AbstractGameView";
import {ReelDisplayViewProperties} from "../properties/ReelDisplayViewProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {Sprite} from "../../tools/view/Sprite";

export class ReelDisplayView extends AbstractGameView {

    protected properties: ReelDisplayViewProperties;

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelDisplayViewProperties>properties;
    }

    protected create(): void {
        super.create();
        this.createBackground();
        this.createPanel();
        this.createReels();
    }

    protected createBackground(): void {
        let sprite: Sprite = new Sprite(this.properties.spriteProperties);
        this.addChild(sprite);

    }

    protected createPanel(): void {

    }

    protected createReels(): void {

    }

    protected createReel(): void {

    }

}