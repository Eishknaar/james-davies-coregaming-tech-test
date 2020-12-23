import {SpriteProperties} from "./SpriteProperties";
import {TextFieldProperties} from "./TextFieldProperties";
import {AlignConstants} from "../../constants/AlignConstants";

export class ButtonProperties extends SpriteProperties {

    public textFieldProperties: TextFieldProperties;
    public fontStyle: string;
    public lang: string;

    public debug: boolean;

    constructor(imageName: string, fontStyle?: string, lang?: string, position?: PIXI.Point) {
        super(imageName, position);

    }

    protected setDefaultValues() {
        super.setDefaultValues();
        if(this.fontStyle) {
            this.textFieldProperties = new TextFieldProperties(this.fontStyle, this.lang, new PIXI.Point(100, 100), new PIXI.Point(0, 0), AlignConstants.CENTER, AlignConstants.CENTER);
        }
        this.debug = false;
    }

    public setDebug(value: boolean): void {
        this.debug = value;
    }

}