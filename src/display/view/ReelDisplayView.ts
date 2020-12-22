import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {ReelDisplayViewProperties} from "../properties/ReelDisplayViewProperties";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {Panel} from "../../abstract/display/view/Panel";
import {ReelView} from "./ReelView";
import {ResultData} from "../../abstract/data/ResultData";
import {Dictionary} from "../../abstract/display/view/Dictionary";
import {EventStyle} from "../../style/EventStyle";

export class ReelDisplayView extends AbstractGameView {

    protected properties: ReelDisplayViewProperties;

    protected panel: Panel;
    protected reels: ReelView[];

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelDisplayViewProperties>properties;
    }

    protected addEventListeners() {
        super.addEventListeners();
        this.addEventListener(EventStyle.SPIN, this.handleSpin, this);
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

    protected spinReels(): void {
        let delay: number = 0;
        for(let i: number = 0; i < this.reels.length; i++){
            this.callAfter(delay, this.spinReel, this, i);
            delay += this.properties.spinDelay;
        }
        delay += this.properties.stopDelay;
        this.callAfter(delay, this.stopReels, this);

    }

    public spinReel(index: number): void {
        let reel: ReelView = this.reels[index];
        reel.spin();
    }

    protected stopReels(): void {
        let delay: number = 0;
        for(let i: number = 0; i < this.reels.length; i++){
            this.callAfter(delay, this.stopReel, this, i);
            delay += this.properties.spinDelay;
        }
        this.callAfter(delay, this.reelsComplete, this);
    }

    protected stopReel(args: any[]): void {
        let index: number = args[0];
        let reel: ReelView = this.reels[index];
        let resultData: ResultData = this.model.getResultData();
        let reelData: Dictionary<number, number[]> = resultData.getReelData();
        let symbols: number[] = reelData.getValue(index);
        reel.stop(symbols);
    }

    public handleSpin(): void {
        this.spinReels();
    }

    public reelsComplete(): void {
        this.dispatchEvent(EventStyle.REELS_LANDED);
    }

}