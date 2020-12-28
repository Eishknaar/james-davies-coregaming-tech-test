import {Button} from "./Button";
import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {RadioButtonProperties} from "../properties/RadioButtonProperties";

export class RadioButton extends Button {

    private isOn: boolean;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <RadioButtonProperties>properties;
    }

    protected initialise() {
        super.initialise();
        this.isOn = false;
    }

    protected handleButtonDown(): void {
        let frame: number = this.isOn ? 6 : 2;
        this.sprite.gotoAndStop(frame);
    }

    protected handleButtonUp(): void {
        this.isOn = !this.isOn;
        let frame: number = this.isOn ? 4 : 0
        this.sprite.gotoAndStop(frame);
    }

    protected handleButtonOver(): void {
        let frame: number = this.isOn ? 5 : 1;
        this.sprite.gotoAndStop(frame);
    }

    protected handleButtonOut(): void {
        let frame: number = this.isOn ? 4 : 0
        this.sprite.gotoAndStop(frame);
    }

    public disable(): void {
        super.disable();
        let frame: number = this.isOn ? 7 : 3;
        this.sprite.gotoAndStop(frame);
    }

    public enable(): void {
        super.enable();
        let frame: number = this.isOn ? 4 : 0;
        this.sprite.gotoAndStop(frame);
    }

    public deselect(): void {
        this.isOn = false;
        this.sprite.gotoAndStop(0);
    }

    public select(): void {
        this.isOn = true;
        this.sprite.gotoAndStop(4);
    }

    public destroy(): void {
        super.destroy();
        this.isOn = null;
    }

    public checkIsOn(): boolean {
        return this.isOn;
    }

}