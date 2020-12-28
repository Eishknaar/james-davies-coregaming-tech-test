import {AbstractController} from "../abstract/controllers/AbstractController";
import {Factory} from "../abstract/factory/Factory";
import {ConfigData} from "../abstract/data/ConfigData";
import {EventStyle} from "../style/EventStyle";
import {SpinResponse} from "../api/SpinResponse";
import {BalanceData} from "../api/BalanceData";

export class GameController extends AbstractController {

    protected configData: ConfigData;

    constructor(factory: Factory) {
        super(factory);
        this.createConfigData();
    }

    protected addEventListeners() {
        super.addEventListeners();
        this.addEventListener(EventStyle.SPIN_REQUEST, this.handleSpinRequest, this);
        this.addEventListener(EventStyle.REELS_LANDED, this.handleReelsLanded, this);
    }

    protected createConfigData(): void {
        this.configData = new ConfigData();
        this.model.setConfigData(this.configData);
    }

    public handleSpinRequest(): void {
        this.server.spin(this.model.getBalance(), this.model.getStake(), this.handleSpinResponse, this);
    }

    public handleSpinResponse(responseCode: number, spinData: any): void {
        if (responseCode == 0) {
            this.dispatchEvent(EventStyle.SPIN_COMPLETE);
        } else {
            let spin: SpinResponse = new SpinResponse(spinData);
            this.model.setSpinResponse(spin);
            this.updateBalanceInfo(spin.getBalanceData());
            this.dispatchEvent(EventStyle.SPIN);
        }
    }

    protected updateBalanceInfo(data: BalanceData): void {
        let displayBalance = this.model.getBalance();
        displayBalance = displayBalance - this.model.getStake();
        this.model.setDisplayBalance(displayBalance);
        this.model.setBalance(data.getBalance());
    }

    protected handleReelsLanded(): void {
        if (this.model.hasWin()) {
            this.win();
        } else {
            this.lose();
        }
    }

    protected win(): void {
        this.model.setDisplayBalance(this.model.getBalance());
        let currentWin = this.model.getWin();
        let win = this.model.getSpinResponse().getBalanceData().getWin();
        let totalWin = currentWin + win;
        this.model.setWin(totalWin);
        this.spinComplete();
    }

    protected lose(): void {
        this.model.setDisplayBalance(this.model.getBalance());
        this.spinComplete();
    }

    protected spinComplete(): void {
        this.dispatchEvent(EventStyle.SPIN_COMPLETE);
    }


}