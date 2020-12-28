import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PanelProperties} from "../../abstract/display/properties/PanelProperties";

export class ReelViewProperties extends AbstractViewProperties {

    public panelProperties: PanelProperties;
    public numberOfCells: number;
    public spinDelay: number;

    constructor() {
        super();
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.panelProperties = new PanelProperties(3, 1, 5, 5);
        this.numberOfCells = 3
        this.spinDelay = 500;
    }

}