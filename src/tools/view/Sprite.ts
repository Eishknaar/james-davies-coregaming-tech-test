import {AbstractView} from "../../abstract/AbstractView";
import {SpriteProperties} from "../properties/SpriteProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class Sprite extends AbstractView {

    protected properties: SpriteProperties;

    protected imagePath: string;
    protected texture: PIXI.Texture;
    protected sprite: PIXI.Sprite;

    constructor(properties: AbstractViewProperties){
        super(properties);
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <SpriteProperties> properties;
    }

    protected create(): void {
        this.createImagePath();
        this.createTexture();
        this.createSprite();
    }

    protected createImagePath(): void {
        this.imagePath = this.properties.imageRoot + "/" + this.properties.imageName + ".png";
    }

    protected createTexture(): void {
        this.texture = PIXI.Texture.fromImage(this.imagePath);
    }

    protected createSprite(): void {
        this.sprite = new PIXI.Sprite(this.texture);
        this.addChild(this.sprite);
    }

}