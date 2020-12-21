import {ResultData} from "../data/ResultData";
import { EventEmitter } from 'events';

export class Model{

    private eventHandler: EventEmitter;
    private resultData: ResultData;
    private spinsRemaining: number;

    constructor(){
        this.eventHandler = new EventEmitter();
        this.setResultData(new ResultData({data: "data"}));
    }

    public setResultData(data: ResultData): void {
        this.resultData = data;
    }

    public setSpinsRemaining(spins: number): void {
        this.spinsRemaining = spins;
    }

    public getResultData(): ResultData {
        return this.resultData;
    }

    public getSpinsRemaining(): number {
        return this.spinsRemaining;
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

}