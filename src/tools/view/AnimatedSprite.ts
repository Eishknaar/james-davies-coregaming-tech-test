import {Sprite} from "./Sprite";
import {AnimatedSpriteProperties} from "../properties/AnimatedSpriteProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class AnimatedSprite extends Sprite {

    protected properties: AnimatedSpriteProperties;
    protected sprite: PIXI.extras.AnimatedSprite;

    private completeHandler: Function;
    private completeHandlerScope: any;
    private frameHandler: Function;
    private frameHandlerScope: any;
    private loopHandler: Function;
    private loopHandlerScope: any;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <AnimatedSpriteProperties>properties;
    }

    protected createSprite(): void {
        this.sprite = new PIXI.extras.AnimatedSprite(this.spriteSheet.animations[this.properties.imageName]);
        this.sprite.loop = this.properties.loop;
        this.sprite.onComplete = () => this.onComplete();
        this.sprite.onFrameChange = () => this.onFrameChange();
        this.sprite.onLoop = () => this.onLoop();
        this.addChild(this.sprite);
    }

    public play(): void {
        this.sprite.play();
    }

    public gotoAndPlay(frameNumber: number): void {
        this.sprite.gotoAndPlay(frameNumber);
    }

    public gotoAndStop(frameNumber: number): void {
        this.sprite.gotoAndStop(frameNumber);
    }

    public stop(): void {
        this.sprite.stop();
    }

    public setAnimationSpeed(speed: number): void {
        this.sprite.animationSpeed = speed;
    }

    public setLoop(loop: boolean): void {
        this.sprite.loop = loop;
    }

    public setCompleteListener(handler: Function, scope: any): void {
        this.completeHandler = handler;
        this.completeHandlerScope = scope;
    }

    public isPlaying(): boolean {
        return this.sprite.playing;
    }

    public getTotalFrames(): number {
        return this.sprite.totalFrames;
    }

    public getCurrentFrame(): number {
        return this.sprite.currentFrame;
    }

    private onComplete(): void {
        if (this.completeHandler != null) {
            this.completeHandler.call(this.completeHandlerScope);
        }
    }

    private onFrameChange(): void {
        if (this.frameHandler != null) {
            this.frameHandler.call(this.frameHandlerScope);
        }
    }

    private onLoop(): void {
        if (this.loopHandler != null) {
            this.loopHandler.call(this.loopHandlerScope);
        }
    }

    public destroy(): void {
        super.destroy();
        this.sprite.destroy();
        this.properties = null;
        this.completeHandler = null;
        this.completeHandlerScope = null;
        this.frameHandler = null;
        this.frameHandlerScope = null;
        this.loopHandler = null;
        this.loopHandlerScope = null;

    }

}