import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PanelProperties} from "../../abstract/display/properties/PanelProperties";

export class ReelViewProperties extends AbstractViewProperties {

    public panelProperties: any;
    public numberOfCells: any;

    constructor(){
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.panelProperties = new PanelProperties(3, 1, 5, 5);
        this.numberOfCells = 3

    }

}