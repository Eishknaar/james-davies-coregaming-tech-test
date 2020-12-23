import {AbstractGameView} from "./AbstractGameView";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {TextFieldProperties} from "../properties/TextFieldProperties";
import {Font} from "../../font/Font";
import {AlignConstants} from "../../constants/AlignConstants";
import {KeyValuePair} from "./KeyValuePair";

export class TextField extends AbstractGameView {

    protected properties: TextFieldProperties;

    protected lang: string;
    protected boundingBox: PIXI.Graphics;
    protected field: PIXI.Text;
    protected style: PIXI.TextStyle;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <TextFieldProperties>properties;
    }

    protected initialise() {
        super.initialise();
        this.lang = this.properties.lang;
    }

    protected create(): void {
        super.create();
        this.createBoundingBox();
        this.createStyle();
        this.createText();
        this.updateAnchors();
        this.updateAlign();
    }

    protected createBoundingBox(): void {
        this.boundingBox = new PIXI.Graphics();
        this.boundingBox.beginFill(0xFF0000, 1);
        this.boundingBox.drawRect(0, 0, this.properties.size.x, this.properties.size.y);
        this.boundingBox.endFill();
        this.boundingBox.visible = this.properties.debug;
        this.addChild(this.boundingBox);
    }

    protected createStyle(): void {
        let font: Font = this.model.getFont(this.properties.fontStyle);
        this.style = font.getStyle();
        if (this.properties.multiline) {
            this.setMultiline(this.properties.size.x, this.properties.horizontalAlign, 1, this.properties.leading);
        }
    }

    protected createText(): void {
        this.field = new PIXI.Text(this.properties.lang, this.style);
        this.addChild(this.field);
    }

    protected updateAnchors(): void {
        let pivot: PIXI.Point = new PIXI.Point(0, 0);
        switch (this.properties.horizontalAlign) {
            case AlignConstants.LEFT:
                pivot.x = 0;
                break;
            case AlignConstants.CENTER:
                pivot.x = 0.5 * this.boundingBox.width;
                break;
            case AlignConstants.RIGHT:
                pivot.x = 1 * this.boundingBox.width;
                break;
            default:
                throw new Error("Did not recognise horizontal align type of '" + this.properties.horizontalAlign + "'");
        }

        switch (this.properties.verticalAlign) {
            case AlignConstants.TOP:
                pivot.y = 0;
                break;
            case AlignConstants.CENTER:
                pivot.y = 0.5 * this.boundingBox.height;
                break;
            case AlignConstants.BOTTOM:
                pivot.y = 1 * this.boundingBox.height;
                break;
            default:
                throw new Error("Did not recognise vertical align type of '" + this.properties.verticalAlign + "'");
        }
        this.boundingBox.pivot = pivot;
        this.field.pivot = pivot;
    }

    protected updateAlign(): void {
        let heightDiff = this.boundingBox.height - this.field.height;
        let widthDiff = this.boundingBox.width - this.field.width;
        let offset: PIXI.Point = new PIXI.Point(0, 0);
        switch (this.properties.horizontalAlign) {
            case AlignConstants.LEFT:
                offset.x = 0;
                break;
            case AlignConstants.CENTER:
                offset.x = widthDiff / 2
                break;
            case AlignConstants.RIGHT:
                offset.x = widthDiff;
                break;
            default:
                throw new Error("Did not recognise horizontal align type of '" + this.properties.horizontalAlign + "'");
        }

        switch (this.properties.verticalAlign) {
            case AlignConstants.TOP:
                offset.y = 0;
                break;
            case AlignConstants.CENTER:
                offset.y = heightDiff / 2
                break;
            case AlignConstants.BOTTOM:
                offset.y = heightDiff;
                break;
            default:
                throw new Error("Did not recognise vertical align type of '" + this.properties.verticalAlign + "'");
        }
        this.field.position = offset;
    }

    protected setMultiline(wrapWidth: number, align: string, lineHeight: number, leading: number): void {
        this.style.wordWrap = true;
        this.style.wordWrapWidth = wrapWidth;
        this.style.whiteSpace = "normal";
        this.style.align = align;
        this.style.lineHeight = lineHeight;
        this.style.leading = leading;
    }

    public setText(lang: string, update?: boolean): void {
        this.lang = lang;
        this.field.text = this.lang;
        if(update){
            this.updateAlign();
        }
    }

    public getLang(): string {
        return this.lang;
    }

    public setDynamicText(keyValuePair: KeyValuePair<string, string>, update?: boolean): void {
        this.lang = this.lang.replace(keyValuePair.getKey(), keyValuePair.getValue());
        this.field.text = this.lang;
        if(update){
            this.updateAlign();
        }
    }

}