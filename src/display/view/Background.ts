import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {BackgroundProperties} from "../properties/BackgroundProperties";
import {Sprite} from "../../abstract/display/view/Sprite";

export class Background extends AbstractGameView {

    protected properties: BackgroundProperties;

    protected sprite: Sprite;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <BackgroundProperties>properties;
    }

    protected create() {
        super.create();
        this.createSprite();
    }

    protected createSprite(): void {
        this.sprite = new Sprite(this.properties.spriteProperties);
        this.addChild(this.sprite);
    }

}