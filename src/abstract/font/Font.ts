import {FontColour} from "./FontColour";
import {FontStroke} from "./FontStroke";
import {FontDropShadow} from "./FontDropShadow";

export class Font {

    private style: PIXI.TextStyle;

    private font: string;
    private size: number;
    private colours: string | string[];
    private gradient: number;
    private capitalisation: string;

    private letterSpacing: number;
    private padding: number;
    private trim: boolean;

    constructor(font: string, size: number, colour: FontColour, isCaps?: boolean) {
        this.font = font;
        this.size = size;
        this.colours = colour.getColours();
        this.gradient = colour.getGradient();
        this.capitalisation = isCaps ? "small-caps" : "normal";
        this.initialise();
        this.createStyle();
    }

    protected initialise(): void {
        this.letterSpacing = 0;
        this.padding = 0;
        this.trim = false;
    }

    protected createStyle(): void {
        this.style = new PIXI.TextStyle({
            fill: this.colours,
            fillGradientType: this.gradient,
            fontFamily: this.font,
            fontSize: this.size,
            fontStyle: "normal",
            fontVariant: this.capitalisation,
            fontWeight: "normal",
            letterSpacing: this.letterSpacing,
            textBaseline: "alphabetic",
            padding: this.padding,
            trim: this.trim
        });
    }

    public addStroke(stroke: FontStroke): Font {
        this.style.stroke = stroke.getColour();
        this.style.strokeThickness = stroke.getThickness();
        this.style.lineJoin = stroke.getLineJoin();
        this.style.miterLimit = stroke.getMiterLimit();
        return this;
    }

    public addDropShadow(shadow: FontDropShadow): Font {
        this.style.dropShadow = true;
        this.style.dropShadowAngle = shadow.getAngle();
        this.style.dropShadowBlur = shadow.getBlur();
        this.style.dropShadowColor = shadow.getColor();
        this.style.dropShadowDistance = shadow.getDistance();
        return this;
    }

    public getStyle(): PIXI.TextStyle {
        return this.style;
    }

}