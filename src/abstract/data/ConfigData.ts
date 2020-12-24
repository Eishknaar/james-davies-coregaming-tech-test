export class ConfigData {

    private stakeValues: number[];
    private defaultStakeIndex: number;
    private balance: number;


    constructor() {
        this.stakeValues = [0.2, 0.5, 1, 2, 5, 10];
        this.defaultStakeIndex = 0;
        this.balance = 100;
    }

    public getStakeValues(): number[] {
        return this.stakeValues;
    }

    public getDefaultStakeIndex(): number {
        return this.defaultStakeIndex;
    }

    public getBalance(): number {
        return this.balance;
    }


}