import {AbstractGameView} from "./AbstractGameView";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {TextFieldProperties} from "../properties/TextFieldProperties";
import {Font} from "../../font/Font";
import {AlignConstants} from "../../constants/AlignConstants";

export class TextField extends AbstractGameView {

    protected properties: TextFieldProperties;

    protected boundingBox: PIXI.Graphics;
    protected text: PIXI.Text;
    protected style: PIXI.TextStyle;
    protected options: PIXI.TextStyleOptions;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <TextFieldProperties> properties;
    }

    protected create(): void {
        this.createBoundingBox();
        this.createOptions();
        this.createStyle();
        this.createText();
        this.updateAlign();
    }

    protected createBoundingBox(): void {
        this.boundingBox = new PIXI.Graphics();
        this.boundingBox.beginFill(0xFF0000, 1);
        this.boundingBox.drawRect(0, 0, this.properties.size.x, this.properties.size.y);
        this.boundingBox.endFill();
        this.boundingBox.visible = true;
        this.addChild(this.boundingBox);
    }

    protected createOptions(): void {
        let font: Font = this.model.getFont(this.properties.fontStyle);
        this.options = font.getOptions();
        if(this.properties.multiline){
            this.setMultiline(this.properties.size.x, this.properties.horizontalAlign, 1, this.properties.leading);
        }
    }

    protected createStyle(): void {
        this.style = new PIXI.TextStyle(this.options);
    }

    protected createText(): void {
        this.text = new PIXI.Text(this.properties.lang, this.options);
        this.addChild(this.text);
    }

    protected updateAlign(): void {
        let heightDiff = this.boundingBox.height - this.text.height;
        let widthDiff = this.boundingBox.width - this.text.width;
        let offset: PIXI.Point = new PIXI.Point(0,0);
        switch(this.properties.horizontalAlign){
            case AlignConstants.LEFT:
                offset.x = 0;
                break;
            case AlignConstants.CENTER:
                offset.x = widthDiff/2
                break;
            case AlignConstants.RIGHT:
                offset.x = widthDiff;
                break;
            default:
                throw new Error("Did not recognise horizontal align type of '" + this.properties.horizontalAlign + "'");
                break;
        }

        switch(this.properties.verticalAlign){
            case AlignConstants.TOP:
                offset.y = 0;
                break;
            case AlignConstants.CENTER:
                offset.y = heightDiff/2
                break;
            case AlignConstants.BOTTOM:
                offset.y = heightDiff;
                break;
            default:
                throw new Error("Did not recognise vertical align type of '" + this.properties.verticalAlign + "'");
                break;
        }

        this.text.position = offset;
    }

    protected setMultiline(wrapWidth: number, align: string, lineHeight: number, leading: number): void {
        this.options.wordWrap = true;
        this.options.wordWrapWidth = wrapWidth;
        this.options.whiteSpace = "normal";
        this.options.align = align;
        this.options.lineHeight = lineHeight;
        this.options.leading = leading;
    }

    public setText(lang: string): void {
        this.text.text = lang;
    }

}