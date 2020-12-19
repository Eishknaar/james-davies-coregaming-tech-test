import {AbstractView} from "../../abstract/AbstractView";
import {AnimatedSpriteProperties} from "../properties/AnimatedSpriteProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class AnimatedSprite extends AbstractView {

    protected properties: AnimatedSpriteProperties;
    protected textures: PIXI.Texture[];
    protected animatedSprite: PIXI.extras.AnimatedSprite;

    private completeHandler: Function;
    private completeHandlerScope: any;
    private frameHandler: Function;
    private frameHandlerScope: any;
    private loopHandler: Function;
    private loopHandlerScope: any;


    constructor(properties: AbstractViewProperties) {
        super(properties);
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <AnimatedSpriteProperties>properties;
    }

    protected create(): void {
        this.createTextures();
        this.createAnimatedSprite();
    }

    protected createTextures(): void {
        this.textures = [];
        for (let frame = 1; frame <= this.properties.numberOfFrames; frame++) {
            this.createTexture(frame);
        }
    }

    protected createTexture(frame: number): void {
        let precisionFrame: string = frame.toPrecision(4);
        let splitPrecision: string[] = precisionFrame.split(".");
        let zeroes: string = splitPrecision[1];
        let postfix: string = zeroes + frame;
        let path: string = this.properties.imageRoot + "/" + this.properties.imagePrefix + postfix + this.properties.fileType;
        let texture: PIXI.Texture = PIXI.Texture.fromImage(path);
        this.textures.push(texture);
    }

    protected createAnimatedSprite(): void {
        this.animatedSprite = new PIXI.extras.AnimatedSprite(this.textures);
        this.animatedSprite.loop = this.properties.loop;
        this.animatedSprite.onComplete = () => this.onComplete();
        this.animatedSprite.onFrameChange = () => this.onFrameChange();
        this.animatedSprite.onLoop = () => this.onLoop();
        this.addChild(this.animatedSprite);
    }


    public play(): void {
        this.animatedSprite.play();
    }

    public gotoAndPlay(frameNumber: number): void {
        this.animatedSprite.gotoAndPlay(frameNumber);
    }

    public gotoAndStop(frameNumber: number): void {
        this.animatedSprite.gotoAndStop(frameNumber);
    }

    public stop(): void {
        this.animatedSprite.stop();
    }

    public setAnimationSpeed(speed: number): void {
        this.animatedSprite.animationSpeed = speed;
    }

    public setLoop(loop: boolean): void {
        this.animatedSprite.loop = loop;
    }

    public setCompleteListener(handler: Function, scope: any): void {
        this.completeHandler = handler;
        this.completeHandlerScope = scope;
    }

    public isPlaying(): boolean {
        return this.animatedSprite.playing;
    }

    public getTotalFrames(): number {
        return this.animatedSprite.totalFrames;
    }

    public getCurrentFrame(): number {
        return this.animatedSprite.currentFrame;
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
        this.properties = null;
        this.completeHandler = null;
        this.completeHandlerScope = null;
        this.frameHandler = null;
        this.frameHandlerScope = null;
        this.loopHandler = null;
        this.loopHandlerScope = null;
        this.animatedSprite.destroy();
        for (let texture of this.textures) {
            texture.destroy();
        }

    }

}