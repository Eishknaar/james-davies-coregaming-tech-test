import {SpriteProperties} from "./SpriteProperties";
import {TextFieldProperties} from "./TextFieldProperties";
import {AlignConstants} from "../../constants/AlignConstants";

export class ButtonProperties extends SpriteProperties {

    public textFieldProperties: TextFieldProperties;

    public debug: boolean;

    constructor(imageName: string, fontStyle: string, lang: string, position?: PIXI.Point) {
        super(imageName, position);
        this.textFieldProperties = new TextFieldProperties(fontStyle, lang, new PIXI.Point(100,100), new PIXI.Point(0, 0), AlignConstants.CENTER, AlignConstants.CENTER);

    }

    protected setDefaultValues() {
        super.setDefaultValues();
        this.debug = false;
    }

    public setDebug(value: boolean): void {
        this.debug = value;
    }

}