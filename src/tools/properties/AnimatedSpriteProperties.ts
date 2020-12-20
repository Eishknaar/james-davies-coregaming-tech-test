import {SpriteProperties} from "./SpriteProperties";

export class AnimatedSpriteProperties extends SpriteProperties {

    public numberOfFrames: number
    public loop: boolean;
    public significantDigits: number;
    public fileType: string;

    constructor(imageName: string, numberOfFrames: number, loop?: boolean, position?: PIXI.Point) {
        super(imageName, position);
        this.numberOfFrames = numberOfFrames;
        this.loop = loop;
    }

    protected setDefaultValues(): void {
        super.setDefaultValues();
        this.significantDigits = 4;
        this.fileType = ".png";
    }

}