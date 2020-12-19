import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class AnimatedSpriteProperties extends AbstractViewProperties {

    public imagePrefix: string
    public numberOfFrames: number
    public loop: boolean;
    public significantDigits: number;
    public imageRoot: string;
    public fileType: string;

    constructor(imageName: string, numberOfFrames: number, loop?: boolean, position?: PIXI.Point) {
        super(position);
        this.imagePrefix = imageName;
        this.numberOfFrames = numberOfFrames;
        this.loop = loop;
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.significantDigits = 4;
        this.imageRoot = "assets";
        this.fileType = ".png";
    }

}