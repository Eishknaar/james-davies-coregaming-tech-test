import "pixi.js";
import pixiManager from "abstract/graphics/PixiManager";
import {Factory} from "./abstract/factory/Factory";
import {ImageLoader} from "./abstract/loader/ImageLoader";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import {Server} from "./server";

// register the plugin
gsap.registerPlugin(PixiPlugin);

// give the plugin a reference to the PIXI object
PixiPlugin.registerPIXI(PIXI);
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
        this.createBackground();
        this.createReelDisplay();
        this.createPlayerInfo();
        this.createControlPanel();
    }

    protected createBackground(): void {
        let background = this.factory.createBackground();
        this.addComponent(background);
    }

    protected createReelDisplay(): void {
        let reelDisplay = this.factory.createReelDisplay();
        this.addComponent(reelDisplay);
    }

    protected createControlPanel(): void {
        let controlPanel = this.factory.createControlPanel();
        this.addComponent(controlPanel);
    }

    protected createPlayerInfo(): void {
        let playerInfo = this.factory.createPlayerInfo();
        this.addComponent(playerInfo);
    }

    protected addComponent(component: PIXI.DisplayObject): void {
        pixiManager.stage.addChild(component);
    }
}

new Main();