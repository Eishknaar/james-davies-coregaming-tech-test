import PixiManager from "../../graphics/PixiManager";

export class MouseBlocker extends PIXI.Container {

    protected backgroundColour: number;
    protected backgroundAlpha: number;
    protected clickHandler: Function;
    protected clickHandlerScope: any;
    protected background: PIXI.Graphics;

    private isDown: boolean;
    private isOver: boolean;

    constructor(colour: number, alpha: number, handler: Function, scope: any) {
        super();
        this.backgroundColour = colour;
        this.backgroundAlpha = alpha;
        this.clickHandler = handler;
        this.clickHandlerScope = scope;
        this.create();
    }

    protected create(): void {
        this.createBackground();
        this.createInteractions();
    }

    protected createBackground(): void {
        this.background = new PIXI.Graphics;
        this.background.beginFill(this.backgroundColour, this.backgroundAlpha);
        this.background.drawRect(0, 0, PixiManager.renderer.width, PixiManager.renderer.height);
        this.background.endFill();
        this.addChild(this.background);
    }

    protected createInteractions(): void {
        this.background.buttonMode = true;
        this.background.interactive = true;
        this.background.on('mousedown', () => this.onButtonDown());
        this.background.on('mouseup', () => this.onButtonUp());
        this.background.on('mouseover', () => this.onButtonOver());
        this.background.on('mouseout', () => this.onButtonOut());
    }

    protected onButtonDown(): void {
        if (this.isOver) {
            this.isDown = true;
        }
    }

    protected onButtonUp(): void {
        if (this.isOver && this.isDown) {
            this.isDown = false;
            this.onClick();
        }
    }

    protected onButtonOver(): void {
        this.isOver = true;
    }

    protected onButtonOut(): void {
        this.isOver = false;
    }


    private onClick(): void {
        if (this.clickHandler != null) {
            this.clickHandler.call(this.clickHandlerScope, this);
        }
    }

}