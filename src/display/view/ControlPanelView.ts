import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ControlPanelViewProperties} from "../properties/ControlPanelViewProperties";
import {Button} from "../../abstract/display/view/Button";
import {EventStyle} from "../../style/EventStyle";
import {VerticalSelector} from "../../abstract/display/view/VerticalSelector";

export class ControlPanelView extends AbstractGameView {

    protected properties: ControlPanelViewProperties;

    protected spinButton: Button;
    protected stakeSelector: VerticalSelector;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <ControlPanelViewProperties> properties;
    }

    protected addEventListeners() {
        super.addEventListeners();
        this.addEventListener(EventStyle.SPIN_COMPLETE, this.handleReelsLanded, this);
    }

    protected create(): void {
        super.create();
        this.createSpinButton();
        this.createStakeSelector();
        this.stakeSelector.setDefaultOption(this.model.getConfigData().getDefaultStakeIndex());
    }

    protected createSpinButton(): void {
        this.spinButton = new Button(this.factory, this.properties.spinButtonProperties, this.handleSpin, this);
        this.addChild(this.spinButton);
    }

    protected createStakeSelector(): void {
        let dataValues: number[] = this.model.getConfigData().getStakeValues();
        let textValues: string[] = [];
        for(let data of dataValues){
            textValues.push(this.formatCurrency(data));
        }

        this.stakeSelector = new VerticalSelector(
            this.factory,
            this.properties.stakeSelectorProperties,
            textValues,
            dataValues,
            this.handleOptionSelected,
            this
        );

        this.addChild(this.stakeSelector);
    }

    public handleSpin(): void {
        this.dispatchEvent(EventStyle.SPIN_REQUEST);
        this.spinButton.disable();
    }

    public handleOptionSelected(button: Button): void {
        let stake: number = button.data;
        this.model.setStake(stake);
        this.dispatchEvent(EventStyle.STAKE_UPDATED);
    }

    public handleReelsLanded(): void {
        this.spinButton.enable();
    }

}