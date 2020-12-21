import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PanelProperties} from "../../abstract/display/properties/PanelProperties";

export class ReelDisplayViewProperties extends AbstractViewProperties {

    public numberOfReels: number
    public panelProperties: PanelProperties
    public spinDelay: number
    public stopDelay: number

    constructor(){
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.position = new PIXI.Point(5, 5,);
        this.numberOfReels = 3;
        this.panelProperties = new PanelProperties(1, 3, 5, 5);
        this.spinDelay = 500;
        this.stopDelay = 1000;
    }

}