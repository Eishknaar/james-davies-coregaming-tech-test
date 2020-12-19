import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
export class SpriteProperties extends AbstractViewProperties {

    public imageName: string;
    public imageRoot: string;


    constructor(imageName: string, position?: PIXI.Point) {
        super(position);
        this.imageName = imageName;
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.imageRoot = "assets"
    }

}