import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ControlPanelViewProperties} from "../properties/ControlPanelViewProperties";
import {Button} from "../../abstract/display/view/Button";

export class ControlPanelView extends AbstractGameView {

    protected properties: ControlPanelViewProperties;

    protected spinButton: Button;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <ControlPanelViewProperties> properties;
    }

    protected create(): void {
        super.create();
        this.createSpinButton();
    }

    protected createSpinButton(): void {
        this.spinButton = new Button(this.properties.spinButtonProperties, this.handleSpin, this);
        this.addChild(this.spinButton);
    }

    public handleSpin(): void {
        console.log("Stop hitting me!")
    }

}