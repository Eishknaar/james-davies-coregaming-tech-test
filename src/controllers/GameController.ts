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
    }

    protected createConfigData(): void {
        this.configData = new ConfigData();
        this.model.setConfigData(this.configData);
    }

    public handleSpinRequest(): void {
        let response: any = this.getResultData();
        this.createResultData(response);
        this.dispatchEvent(EventStyle.SPIN);
    }

    protected getResultData(): any {
        let response: any = "get info from server";
        return response;
    }

    protected createResultData(response: any): void {
        this.resultData = new ResultData(response);
        this.model.setResultData(this.resultData);
    }



}