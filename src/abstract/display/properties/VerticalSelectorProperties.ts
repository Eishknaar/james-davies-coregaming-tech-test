import {AbstractViewProperties} from "./AbstractViewProperties";
import {PanelProperties} from "./PanelProperties";
import {SpriteProperties} from "./SpriteProperties";
import {RadioButtonProperties} from "./RadioButtonProperties";

export class VerticalSelectorProperties extends AbstractViewProperties {

    private backgroundStyle: string;
    private selectorButtonStyle: string;
    private triggerButtonStyle: string;
    private selectorButtonFont: string;
    private triggerButtonFont: string;

    public selectorPanelProperties: PanelProperties;
    public selectorBackgroundProperties: SpriteProperties;
    public selectorButtonProperties: RadioButtonProperties;
    public triggerButtonProperties: RadioButtonProperties;

    public closeDuration: number;
    public openDuration: number;

    public mouseBlockerColour: number;
    public mouseBlockerAlpha: number;

    constructor(backgroundStyle: string, selectorButtonStyle: string, selectorButtonFont: string, triggerButtonStyle: string, triggerButtonFont: string, position?: PIXI.Point) {
        super(position);
        this.backgroundStyle = backgroundStyle;
        this.selectorButtonStyle = selectorButtonStyle;
        this.selectorButtonFont = selectorButtonFont;
        this.triggerButtonStyle = triggerButtonStyle;
        this.triggerButtonFont = triggerButtonFont;
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.selectorPanelProperties = new PanelProperties(0, 0);
        this.selectorBackgroundProperties = new SpriteProperties(this.backgroundStyle);
        this.selectorButtonProperties = new RadioButtonProperties(this.selectorButtonStyle, this.selectorButtonFont);
        this.triggerButtonProperties = new RadioButtonProperties(this.triggerButtonStyle, this.triggerButtonFont);
        this.closeDuration = 1;
        this.openDuration = 1;
        this.mouseBlockerColour = 0x000000;
        this.mouseBlockerAlpha = 0.5;
    }

}