import {Dictionary} from "../display/view/Dictionary";

export class ResultData {

    private data: any;
    private reels: Dictionary<number, number[]>;
    private balance: number
    private stake: number
    private win: number

    constructor(data: any){
        this.update(data);
    }

    public update(data: any){
        this.data = data;
        this.solidify();
    }

    protected solidify(): void {
        this.solidifyReels();
        this.solidifyValues();
    }

    protected solidifyReels(): void {
        /* temporarily use static data */
        this.reels = new Dictionary<number, number[]>();
        this.reels.set(0, [2,2,1]);
        this.reels.set(1, [1,2,1]);
        this.reels.set(2, [1,0,1]);
    }

    protected solidifyValues(): void {
        /* temporarily use static data */
        this.balance = 98.80;
        this.stake = 1.20;
        this.win = 0.00;
    }

    public getReelData(): Dictionary<number, number[]> {
        return this.reels;
    }

    public getBalanceData(): number {
        return this.balance;
    }

    public getStakeData(): number {
        return this.stake;
    }

    public getWinData(): number {
        return this.win;
    }

    public getData(): any {
        return this.data;
    }

}