import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ControlPanelViewProperties} from "../properties/ControlPanelViewProperties";
import {Button} from "../../abstract/display/view/Button";
import {EventStyle} from "../../style/EventStyle";

export class ControlPanelView extends AbstractGameView {

    protected properties: ControlPanelViewProperties;

    protected spinButton: Button;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <ControlPanelViewProperties> properties;
    }

    protected addEventListeners() {
        super.addEventListeners();
        this.addEventListener(EventStyle.REELS_LANDED, this.handleReelsLanded, this);
    }

    protected create(): void {
        super.create();
        this.createSpinButton();
    }

    protected createSpinButton(): void {
        this.spinButton = new Button(this.factory, this.properties.spinButtonProperties, this.handleSpin, this);
        this.addChild(this.spinButton);
    }

    public handleSpin(): void {
        this.dispatchEvent(EventStyle.SPIN);
        this.spinButton.disable();
    }

    public handleReelsLanded(): void {
        this.spinButton.enable();
    }

}