import {AbstractViewProperties} from "./AbstractViewProperties";
export class SpriteProperties extends AbstractViewProperties {

    public imageName: string;
    public fileType: string;


    constructor(imageName: string, position?: PIXI.Point) {
        super(position);
        this.imageName = imageName;
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.fileType = ".png";
    }

}