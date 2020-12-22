import {FontColour} from "./FontColour";
import {FontStroke} from "./FontStroke";
import {FontDropShadow} from "./FontDropShadow";

export class Font {

    private options: PIXI.TextStyleOptions;

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
        this.createOptions();
    }

    protected initialise(): void {
        this.letterSpacing = 0;
        this.padding = 0;
        this.trim = false;
    }

    protected createOptions(): void {
        this.options = {
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
        };
    }

    public addStroke(stroke: FontStroke): Font {
        this.options.stroke = stroke.getColour();
        this.options.strokeThickness = stroke.getThickness();
        this.options.lineJoin = stroke.getLineJoin();
        this.options.miterLimit = stroke.getMiterLimit();
        return this;
    }

    public addDropShadow(shadow: FontDropShadow): Font {
        this.options.dropShadow = true;
        this.options.dropShadowAngle = shadow.getAngle();
        this.options.dropShadowBlur = shadow.getBlur();
        this.options.dropShadowColor = shadow.getColor();
        this.options.dropShadowDistance = shadow.getDistance();
        return this;
    }

    public getOptions(): PIXI.TextStyleOptions {
        return this.options;
    }

}