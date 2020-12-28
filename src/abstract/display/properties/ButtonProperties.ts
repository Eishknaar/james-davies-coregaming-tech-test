import {TextFieldProperties} from "./TextFieldProperties";
import {AlignConstants} from "../../constants/AlignConstants";
import {AbstractViewProperties} from "./AbstractViewProperties";

export class ButtonProperties extends AbstractViewProperties {


    public imageName: string;
    public fileType: string;
    public textFieldProperties: TextFieldProperties;
    public fontStyle: string;
    public lang: string;

    public debug: boolean;

    constructor(imageName: string, fontStyle?: string, lang?: string, position?: PIXI.Point) {
        super(position);
        this.imageName = imageName;
        this.fontStyle = fontStyle;
        this.lang = lang;
        this.setDefaultValues();

    }

    protected setDefaultValues() {
        this.fileType = ".png";
        this.debug = false;
        if (this.fontStyle) {
            this.textFieldProperties = new TextFieldProperties(this.fontStyle, this.lang, new PIXI.Point(100, 100), new PIXI.Point(0, 0), AlignConstants.CENTER, AlignConstants.CENTER);
        }
    }

    public setDebug(value: boolean): void {
        this.debug = value;
    }

}