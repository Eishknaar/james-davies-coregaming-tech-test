import {AbstractGameView} from "./AbstractGameView";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {TextFieldProperties} from "../properties/TextFieldProperties";
import {Font} from "../../font/Font";

export class TextField extends AbstractGameView {

    protected properties: TextFieldProperties;

    protected text: PIXI.Text;
    protected style: PIXI.TextStyle;
    protected options: PIXI.TextStyleOptions;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <TextFieldProperties> properties;
    }

    protected create(): void {
        this.createOptions();
        this.createStyle();
        this.createText();
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