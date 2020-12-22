import {AbstractGameView} from "./AbstractGameView";
import {Factory} from "../../factory/Factory";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {ButtonProperties} from "../properties/ButtonProperties";
import {TextField} from "./TextField";

export class Button extends AbstractGameView {

    protected properties: ButtonProperties;
    protected spriteSheet: PIXI.Spritesheet;
    protected sprite: PIXI.extras.AnimatedSprite;
    protected textField: TextField;

    private clickHandler: Function;
    private clickHandlerScope: any;
    private isEnabled: boolean;
    private isDown: boolean;
    private isOver: boolean;

    constructor(factory: Factory, properties: ButtonProperties, handler: Function, scope: any) {
        super(factory, properties);
        this.clickHandler = handler;
        this.clickHandlerScope = scope;
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <ButtonProperties>properties;
    }

    protected initialise() {
        super.initialise();
        this.isEnabled = true;
        this.isOver = false;
        this.isDown = false;
    }

    protected create(): void {
        super.create();
        this.createSpriteSheet();
        this.createSprite();
        this.createTextField();
        this.createInteraction();
    }

    protected createSpriteSheet(): void {
        this.spriteSheet = PIXI.loader.resources["spritesheet/spritesheet.json"].spritesheet;
    }

    protected createSprite(): void {
        this.sprite = new PIXI.extras.AnimatedSprite(this.spriteSheet.animations[this.properties.imageName]);
        this.sprite.loop = false;
        this.addChild(this.sprite);
    }

    protected createTextField(): void {
        if(this.properties.textFieldProperties) {
            this.properties.textFieldProperties.setDebug(this.properties.debug);
            this.properties.textFieldProperties.size = new PIXI.Point(this.sprite.width, this.sprite.height);
            this.textField = new TextField(this.factory, this.properties.textFieldProperties);
            this.addChild(this.textField);
        }
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
            this.sprite.gotoAndStop(0);
            this.onClick();
        }
        this.isDown = false;
    }

    protected onButtonOver(): void {
        if(this.isEnabled) {
            this.isOver = true;
            this.sprite.gotoAndStop(1);
        }
    }

    protected onButtonOut(): void {
        if(this.isEnabled) {
            this.isOver = false;
            this.sprite.gotoAndStop(0);
        }
    }

    private onClick(): void {
        if (this.clickHandler != null) {
            this.clickHandler.call(this.clickHandlerScope);
        }
    }

    public disable(): void {
        this.isOver = false;
        this.isDown = false;
        this.isEnabled = false;
        this.interactive = false;
        this.sprite.gotoAndStop(3);
    }

    public enable(): void {
        this.isEnabled = true;
        this.interactive = true;
        this.sprite.gotoAndStop(0);
    }

    public destroy(): void {
        super.destroy();
        this.sprite.destroy();
        this.properties = null;
        this.clickHandler = null;
        this.clickHandlerScope = null;

    }

}