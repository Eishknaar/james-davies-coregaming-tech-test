import {ResultData} from "../data/ResultData";

export class Model{

    private resultData: ResultData;
    private spinsRemaining: number;

    constructor(){

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

}