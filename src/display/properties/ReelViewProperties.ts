import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {PanelProperties} from "../../tools/properties/PanelProperties";

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