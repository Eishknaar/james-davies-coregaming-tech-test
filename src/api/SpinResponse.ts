import {AbstractSolidifyable} from "./AbstractSolidifyable";
import {BalanceData} from "./BalanceData";
import {ReelData} from "./ReelData";
import {ServerConstants} from "./constants/ServerConstants";

export class SpinResponse extends AbstractSolidifyable {

    protected balanceData: BalanceData;
    protected reelData: ReelData[];

    protected solidify() {
        super.solidify();
        this.solidifyBalanceData();
        this.solidifyReelData();
    }

    protected solidifyBalanceData(): void {
        let data: any = this.getObject(ServerConstants.ATTRIBUTES);
        this.balanceData = new BalanceData(data);
    }

    protected solidifyReelData(): void {
        this.reelData = [];
        let dataArray: any[] = this.getObjectArray(ServerConstants.ELEMENTS);
        for(let data of dataArray){
            let reelData: ReelData = new ReelData(data);
            this.reelData.push(reelData);
        }
    }

    public getBalanceData(): BalanceData {
        return this.balanceData;
    }

    public getReelData(): ReelData[] {
        return this.reelData;
    }
}