import {ReelDisplayView} from "../../display/view/ReelDisplayView";
import {ReelDisplayViewProperties} from "../../display/properties/ReelDisplayViewProperties";
import {ReelView} from "../../display/view/ReelView";
import {ReelViewProperties} from "../../display/properties/ReelViewProperties";
import {CellView} from "../../display/view/CellView";
import {CellViewProperties} from "../../display/properties/CellViewProperties";
import {Model} from "../model/Model";
import {ControlPanelView} from "../../display/view/ControlPanelView";
import {ControlPanelViewProperties} from "../../display/properties/ControlPanelViewProperties";

export class Factory {

    protected model: Model;

    constructor(){
        this.model = new Model();
    }

    public createControlPanel(): ControlPanelView {
        return new ControlPanelView(this, new ControlPanelViewProperties());
    }

    public createReelDisplay(): ReelDisplayView {
        return new ReelDisplayView(this, new ReelDisplayViewProperties());
    }

    public createReel(): ReelView {
        return new ReelView(this, new ReelViewProperties());
    }

    public createCell(): CellView {
        return new CellView(this, new CellViewProperties());
    }

    public getModel(): Model {
        return this.model;
    }

}