import "pixi.js";
import pixiManager from "abstract/graphics/PixiManager";
import {Factory} from "./abstract/factory/Factory";
import {ImageLoader} from "./abstract/loader/ImageLoader";

class Main {

    protected factory: Factory;
    protected loader: ImageLoader;

    constructor() {
        this.createFactory();
        this.createLoader();
    }

    protected createFactory(): void {
        this.factory = new Factory();
    }

    protected createLoader(): void {
        this.loader = new ImageLoader(this.create, this);
    }

    protected create(): void {
        this.createReelDisplay();
        this.createControlPanel();
    }

    protected createReelDisplay(): void {
        let reelDisplay = this.factory.createReelDisplay(new PIXI.Point(5, 5));
        this.addComponent(reelDisplay);
    }

    protected createControlPanel(): void {
        let controlPanel = this.factory.createControlPanel();
        this.addComponent(controlPanel);
    }

    protected addComponent(component: PIXI.DisplayObject): void {
        pixiManager.stage.addChild(component);
    }
}

new Main();