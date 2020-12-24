import {ResultData} from "../data/ResultData";
import { EventEmitter } from 'events';
import {FontMap} from "../../font/FontMap";
import {Font} from "../font/Font";
import {ConfigData} from "../data/ConfigData";

export class Model{

    private eventHandler: EventEmitter;
    private fontMap: FontMap;
    private configData: ConfigData;
    private resultData: ResultData;
    private stake: number;

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
    }

    public setResultData(data: ResultData): void {
        this.resultData = data;
    }

    public setStake(value: number): void {
        this.stake = value;
    }

    public getConfigData(): ConfigData {
        return this.configData;
    }

    public getResultData(): ResultData {
        return this.resultData;
    }

    public getStake(): number {
        return this.stake;
    }

    public addEventListener(event: string, handler: Function, scope: any): void {
        this.eventHandler.addListener(event, () => {
            handler.call(scope);
        })
    }

    public dispatchEvent(event: string): void {
        this.eventHandler.emit(event);
    }

    public getFont(fontStyle: string): Font {
        return this.fontMap.getFont(fontStyle);
    }

}