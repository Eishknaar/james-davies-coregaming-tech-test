import {AbstractView} from "./AbstractView";
import {SpriteProperties} from "../properties/SpriteProperties";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {Factory} from "../../factory/Factory";

export class Sprite extends AbstractView {

    protected properties: SpriteProperties;

    protected spriteSheet: PIXI.Spritesheet;
    protected sprite: PIXI.Sprite;

    constructor(properties: AbstractViewProperties) {
        super(properties);
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <SpriteProperties> properties;
    }

    protected create(): void {
        this.createSpriteSheet();
        this.createSprite();
    }

    protected createSpriteSheet(): void {
        this.spriteSheet = PIXI.loader.resources["spritesheet/spritesheet.json"].spritesheet;
    }

    protected createSprite(): void {
        let path: string = this.properties.imageName + this.properties.fileType;
        this.sprite = new PIXI.Sprite(this.spriteSheet.textures[path]);
        this.addChild(this.sprite);
    }

    public destroy(): void {
        super.destroy();
        this.sprite.destroy();
        this.spriteSheet.destroy();
        this.properties = null;
    }

}