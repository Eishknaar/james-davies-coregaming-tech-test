import {ResultData} from "../data/ResultData";
import { EventEmitter } from 'events';
import {FontMap} from "../../font/FontMap";
import {Font} from "../font/Font";

export class Model{

    private eventHandler: EventEmitter;
    private fontMap: FontMap;
    private resultData: ResultData;
    private spinsRemaining: number;
    private stakeValues: number[];
    private stake: number;

    constructor(){
        this.eventHandler = new EventEmitter();
        this.fontMap = new FontMap();
        this.setResultData(new ResultData({data: "data"}));
        this.setStakeValues([0.20, 0.50, 1, 2, 5, 10]);
    }

    public setResultData(data: ResultData): void {
        this.resultData = data;
    }

    public setSpinsRemaining(spins: number): void {
        this.spinsRemaining = spins;
    }

    public setStakeValues(values: number[]): void {
        this.stakeValues = values;
    }

    public setStake(value: number): void {
        this.stake = value;
    }

    public getResultData(): ResultData {
        return this.resultData;
    }

    public getSpinsRemaining(): number {
        return this.spinsRemaining;
    }

    public getStakeValues(): number[] {
        return this.stakeValues;
    }

    public getStake(): number {
        return this.stake;
    }

    public decrementSpins(): void {
        this.spinsRemaining--;
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