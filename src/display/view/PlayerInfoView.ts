import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {PlayerInfoViewProperties} from "../properties/PlayerInfoViewProperties";
import {Sprite} from "../../abstract/display/view/Sprite";
import {TextField} from "../../abstract/display/view/TextField";
import {KeyValuePair} from "../../abstract/display/view/KeyValuePair";
import {GameLang} from "../../style/GameLang";
import {EventStyle} from "../../style/EventStyle";

export class PlayerInfoView extends AbstractGameView {

    protected properties: PlayerInfoViewProperties;

    protected background: Sprite;
    protected balanceField: TextField;
    protected totalWinField: TextField;
    protected stakeField: TextField;

    protected createProperties(properties: AbstractViewProperties) {
        super.createProperties(properties);
        this.properties = <PlayerInfoViewProperties> properties;
    }

    protected addEventListeners() {
        super.addEventListeners();
        this.addEventListener(EventStyle.STAKE_UPDATED, this.handleStakeUpdated, this);
    }

    protected create() {
        super.create();
        this.createBackground();
        this.createFields();
    }

    protected createBackground(): void {
        this.background = new Sprite(this.properties.backgroundProperties);
        this.addChild(this.background);
    }

    protected createFields(): void {
        this.balanceField = this.createField(this.properties.balanceFieldProperties);
        this.totalWinField = this.createField(this.properties.totalWinFieldProperties);
        this.stakeField = this.createField(this.properties.stakeFieldProperties);
        this.updateField(this.balanceField, this.model.getResultData().getBalanceData());
        this.updateField(this.stakeField, this.model.getStake());
        this.updateField(this.totalWinField, this.model.getResultData().getWinData());
    }

    protected createField(properties: AbstractViewProperties): TextField {
        let field: TextField = new TextField(this.factory, properties);
        this.addChild(field);
        return field;
    }

    public handleStakeUpdated(): void {
        this.updateField(this.stakeField, this.model.getStake());
    }

    public updateField(field: TextField, amount: number): void {
        let stringValue: string = this.formatCurrency(amount);
        let params: KeyValuePair<string, string> = new KeyValuePair<string, string>(GameLang.PARAM_AMOUNT, stringValue);
        field.setDynamicText(params, true);
    }

}