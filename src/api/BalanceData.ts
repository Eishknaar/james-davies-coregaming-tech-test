import {AbstractSolidifyable} from "./AbstractSolidifyable";
import {ServerConstants} from "./constants/ServerConstants";

export class BalanceData extends AbstractSolidifyable {

    protected balance: number;
    protected stake: number;
    protected win: number;

    protected solidify() {
        super.solidify();
        this.balance = this.getNumber(ServerConstants.BALANCE);
        this.stake = this.getNumber(ServerConstants.STAKE);
        this.win = this.getNumber(ServerConstants.WIN);
    }

    public getBalance(): number {
        return this.balance
    }

    public getStake(): number {
        return this.stake
    }

    public getWin(): number {
        return this.win
    }
}