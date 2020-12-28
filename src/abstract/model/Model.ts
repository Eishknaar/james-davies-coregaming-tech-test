import { EventEmitter } from 'events';
import {FontMap} from "../../font/FontMap";
import {Font} from "../font/Font";
import {ConfigData} from "../data/ConfigData";
import {SpinResponse} from "../../api/SpinResponse";

export class Model{

    private eventHandler: EventEmitter;
    private fontMap: FontMap;
    private configData: ConfigData;
    private spinResponse: SpinResponse;
    private stake: number;
    private balance: number;
    private displayBalance: number;
    private win: number;

    constructor(){
        this.createEventHandler();
        this.createFontMap();
    }

    protected createEventHandler(): void {
        this.eventHandler = new EventEmitter();
    }

    protected createFontMap(): void {
        this.fontMap = new FontMap();
    }

    public setConfigData(data: ConfigData): void {
        this.configData = data;
        this.setBalance(this.configData.getBalance());
        this.setStake(this.configData.getStakeValues()[this.configData.getDefaultStakeIndex()]);
        this.setWin(0);
    }

    public setSpinResponse(data: SpinResponse): void {
        this.spinResponse = data;
    }

    public setStake(value: number): void {
        this.stake = value;
    }

    public setBalance(value: number): void {
        this.balance = value;
    }

    public setDisplayBalance(value: number): void {
        this.displayBalance = value;
    }

    public setWin(value: number): void {
        this.win = value;
    }

    public getConfigData(): ConfigData {
        return this.configData;
    }

    public getSpinResponse(): SpinResponse {
        return this.spinResponse;
    }

    public getStake(): number {
        return this.stake;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getDisplayBalance(): number {
        return this.displayBalance;
    }

    public getWin(): number {
        return this.win;
    }

    public hasWin(): boolean {
        return this.getSpinResponse().getBalanceData().getWin() > 0;
    }

    public getFont(fontStyle: string): Font {
        return this.fontMap.getFont(fontStyle);
    }

    public addEventListener(event: string, handler: Function, scope: any): void {
        this.eventHandler.addListener(event, () => {
            handler.call(scope);
        })
    }

    public dispatchEvent(event: string): void {
        this.eventHandler.emit(event);
    }

}