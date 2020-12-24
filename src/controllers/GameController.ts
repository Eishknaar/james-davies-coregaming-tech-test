import {AbstractController} from "../abstract/controllers/AbstractController";
import {Factory} from "../abstract/factory/Factory";
import {ConfigData} from "../abstract/data/ConfigData";
import {ResultData} from "../abstract/data/ResultData";
import {EventStyle} from "../style/EventStyle";

export class GameController extends AbstractController{

    protected configData: ConfigData;
    protected resultData: ResultData;

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
        let response: any = this.getServerResponse();
        this.createResultData(response);
        this.chargeBalance();
        this.dispatchEvent(EventStyle.SPIN);
    }

    protected getServerResponse(): any {
        let response: any = "get info from server";
        return response;
    }

    protected createResultData(response: any): void {
        this.resultData = new ResultData(response);
        this.model.setResultData(this.resultData);
    }

    protected chargeBalance(): void {
        let oldBalance: number = this.model.getDisplayBalance();
        let newBalance: number = oldBalance - this.model.getStake();
        this.model.setDisplayBalance(newBalance);
    }

    protected handleReelsLanded(): void {
        if(this.resultData.hasWin()){
            this.win();
        }
        else{
            this.lose();
        }
    }

    protected win(): void {
        this.model.setDisplayBalance(this.resultData.getBalanceData());
        this.spinComplete();
    }

    protected lose(): void {
        this.model.setDisplayBalance(this.resultData.getBalanceData());
        this.spinComplete();
    }

    protected spinComplete(): void {
        this.dispatchEvent(EventStyle.SPIN_COMPLETE);
    }



}