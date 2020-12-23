import {AbstractGameView} from "./AbstractGameView";
import {Factory} from "../../factory/Factory";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {ButtonProperties} from "../properties/ButtonProperties";
import {TextField} from "./TextField";
import {TextFieldProperties} from "../properties/TextFieldProperties";
import {AlignConstants} from "../../constants/AlignConstants";

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

    public data: any;

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
        this.data = null;
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
        if (this.properties.textFieldProperties) {
            this.properties.textFieldProperties.setDebug(this.properties.debug);
            this.properties.textFieldProperties.size = new PIXI.Point(this.sprite.width, this.sprite.height);
            this.setFieldPosition(this.properties.textFieldProperties);
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

    protected setFieldPosition(properties: TextFieldProperties): void {
        switch (properties.horizontalAlign) {
            case AlignConstants.LEFT:
                properties.position.x = 0;
                break;
            case AlignConstants.CENTER:
                properties.position.x = this.sprite.width / 2;
                break;
            case AlignConstants.RIGHT:
                properties.position.x = this.sprite.width;
        }

        switch (properties.verticalAlign) {
            case AlignConstants.TOP:
                properties.position.y = 0;
                break;
            case AlignConstants.CENTER:
                properties.position.y = this.sprite.height / 2;
                break;
            case AlignConstants.BOTTOM:
                properties.position.y = this.sprite.height;
        }
    }

    protected onButtonDown(): void {
        if (this.isOver) {
            this.isDown = true;
            this.handleButtonDown();
        }
    }

    protected onButtonUp(): void {
        if (this.isOver && this.isDown) {
            this.isDown = false;
            this.handleButtonUp();
            this.onClick();
        }
    }

    protected onButtonOver(): void {
        if (this.isEnabled) {
            this.isOver = true;
            this.handleButtonOver();
        }
    }

    protected onButtonOut(): void {
        if (this.isEnabled) {
            this.isOver = false;
            this.handleButtonOut();
        }
    }

    protected handleButtonDown(): void {
        this.sprite.gotoAndStop(2);
    }

    protected handleButtonUp(): void {
        this.sprite.gotoAndStop(0);
    }

    protected handleButtonOver(): void {
        this.sprite.gotoAndStop(1);
    }

    protected handleButtonOut(): void {
        this.sprite.gotoAndStop(0);
    }


    private onClick(): void {
        if (this.clickHandler != null) {
            this.clickHandler.call(this.clickHandlerScope, this);
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

    public setText(text: string): void {
        if(this.textField) {
            this.textField.setText(text, true);
        }
    }

    public destroy(): void {
        super.destroy();
        this.spriteSheet.destroy();
        this.sprite.destroy();
        this.textField.destroy();
        this.properties = null;
        this.clickHandler = null;
        this.clickHandlerScope = null;
        this.data = null;
        this.isDown = null;
        this.isOver = null;
        this.isEnabled = null;

    }

}