import {ReelDisplayView} from "../../display/view/ReelDisplayView";
import {ReelDisplayViewProperties} from "../../display/properties/ReelDisplayViewProperties";
import {ReelView} from "../../display/view/ReelView";
import {ReelViewProperties} from "../../display/properties/ReelViewProperties";
import {CellView} from "../../display/view/CellView";
import {CellViewProperties} from "../../display/properties/CellViewProperties";
import {Model} from "../model/Model";
import {ControlPanelView} from "../../display/view/ControlPanelView";
import {ControlPanelViewProperties} from "../../display/properties/ControlPanelViewProperties";
import {PlayerInfoView} from "../../display/view/PlayerInfoView";
import {PlayerInfoViewProperties} from "../../display/properties/PlayerInfoViewProperties";
import {GameController} from "../../controllers/GameController";
import {Background} from "../../display/view/Background";
import {BackgroundProperties} from "../../display/properties/BackgroundProperties";

export class Factory {

    protected model: Model;

    protected gameController: GameController;

    constructor(){
        this.model = new Model();
        this.createControllers();
    }

    protected createControllers(): void {
        this.gameController = new GameController(this);
    }

    public createBackground(): Background {
        return new Background(this, new BackgroundProperties());
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

    public createPlayerInfo(): PlayerInfoView {
        return new PlayerInfoView(this, new PlayerInfoViewProperties());
    }

    public getModel(): Model {
        return this.model;
    }

}