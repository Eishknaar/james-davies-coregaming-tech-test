import {AbstractViewProperties} from "./AbstractViewProperties";
import {AlignConstants} from "../../constants/AlignConstants";

export class TextFieldProperties extends AbstractViewProperties {

    public fontStyle: string;
    public lang: string;
    public size: PIXI.Point;
    public horizontalAlign: string;
    public verticalAlign: string;

    public multiline: boolean;
    public leading: number;

    constructor(fontStyle: string, lang?: string, size?: PIXI.Point, position?: PIXI.Point, horizontalAlign?: string, verticalAlign?: string) {
        super(position);
        this.fontStyle = fontStyle;
        this.lang = "" + lang;
        this.size = size ? size : new PIXI.Point(100, 100);
        this.horizontalAlign = horizontalAlign ? horizontalAlign : AlignConstants.CENTER;
        this.verticalAlign = verticalAlign ? verticalAlign : AlignConstants.CENTER;
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.multiline = false;
        this.leading = 50;
    }

    public setMultiline(value: boolean): void {
        this.multiline = value;
    }

    public setLeading(value: number): void {
        this.leading = value;
    }

}