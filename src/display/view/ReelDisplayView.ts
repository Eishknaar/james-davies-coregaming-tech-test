import {AbstractGameView} from "../../abstract/AbstractGameView";
import {ReelDisplayViewProperties} from "../properties/ReelDisplayViewProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {Panel} from "../../tools/view/Panel";
import {ReelView} from "./ReelView";

export class ReelDisplayView extends AbstractGameView {

    protected properties: ReelDisplayViewProperties;

    protected panel: Panel;
    protected reels: ReelView[];

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelDisplayViewProperties>properties;
    }

    protected create(): void {
        super.create();
        this.createBackground();
        this.createPanel();
        this.createReels();
    }

    protected createBackground(): void {

    }

    protected createPanel(): void {
        this.panel = new Panel(this.properties.panelProperties);
        this.addChild(this.panel);
    }

    protected createReels(): void {
        this.reels = [];
        for(let i: number = 0; i < this.properties.numberOfReels; i++){
            this.createReel();
        }
        this.panel.refresh();
    }

    protected createReel(): void {
        let reel: ReelView = this.factory.createReel();
        this.reels.push(reel);
        this.panel.addToPanel(reel);
    }

}