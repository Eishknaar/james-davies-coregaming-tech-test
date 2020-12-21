import {Sprite} from "./Sprite";
import {AnimatedSpriteProperties} from "../properties/AnimatedSpriteProperties";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {ButtonProperties} from "../properties/ButtonProperties";

export class Button extends Sprite {

    protected properties: ButtonProperties;
    protected sprite: PIXI.extras.AnimatedSprite;

    private clickHandler: Function;
    private clickHandlerScope: any;
    private isDown: boolean
    private isOver: boolean;

    constructor(properties: ButtonProperties, handler: Function, scope: Object) {
        super(properties);
        this.clickHandler = handler;
        this.clickHandlerScope = scope;
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <ButtonProperties>properties;
    }

    protected create(): void {
        super.create();
        this.createInteraction();
    }

    protected createSprite(): void {
        this.sprite = new PIXI.extras.AnimatedSprite(this.spriteSheet.animations[this.properties.imageName]);
        this.sprite.loop = false;
        this.addChild(this.sprite);
    }


    protected createInteraction(): void {
        this.buttonMode = true;
        this.interactive = true;
        this.on('mousedown', () => this.onButtonDown());
        this.on('mouseup', () => this.onButtonUp());
        this.on('mouseover', () => this.onButtonOver());
        this.on('mouseout', () => this.onButtonOut());
    }

    protected onButtonDown(): void {
        if (this.isOver) {
            this.isDown = true;
            this.sprite.gotoAndStop(2);
        }
    }

    protected onButtonUp(): void {
        if (this.isOver && this.isDown) {
            this.isDown = false;
            this.sprite.gotoAndStop(0);
            this.onClick();
        }
    }

    protected onButtonOver(): void {
        this.isOver = true;
        this.sprite.gotoAndStop(1);
    }

    protected onButtonOut(): void {
        this.isOver = false;
        this.sprite.gotoAndStop(0);
    }

    private onClick(): void {
        if (this.clickHandler != null) {
            this.clickHandler.call(this.clickHandlerScope);
        }
    }

    public destroy(): void {
        super.destroy();
        this.sprite.destroy();
        this.properties = null;
        this.clickHandler = null;
        this.clickHandlerScope = null;

    }

}