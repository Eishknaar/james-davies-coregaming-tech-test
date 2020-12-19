import "pixi.js";
import pixiManager from "graphics/PixiManager";
import {Factory} from "./factory/Factory";

class Main {

    protected factory: Factory;

    constructor() {
        this.createFactory();
        this.create();
    }

    protected createFactory(): void {
        this.factory = new Factory();
    }

    protected create(): void {
        this.createReelDisplay();
    }

    protected createReelDisplay(): void {
        let reelDisplay = this.factory.createReelDisplay(new PIXI.Point(5, 5));
        this.addComponent(reelDisplay);
    }

    protected addComponent(component: PIXI.DisplayObject): void {
        pixiManager.stage.addChild(component);
    }
}

new Main();