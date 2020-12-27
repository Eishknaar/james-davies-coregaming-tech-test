import {AbstractSolidifyable} from "./AbstractSolidifyable";
import {BalanceData} from "./BalanceData";
import {ColumnData} from "./ColumnData";
import {ServerConstants} from "./constants/ServerConstants";
import {ReelData} from "./ReelData";

export class SpinResponse extends AbstractSolidifyable {

    protected balanceData: BalanceData;
    protected columns: ColumnData[];
    protected reels: ReelData[];

    protected solidify() {
        super.solidify();
        this.solidifyBalanceData();
        this.solidifyColumnData();
    }

    protected create(): void {
        this.createReelDataArray();
    }

    protected solidifyBalanceData(): void {
        let data: any = this.getObject(ServerConstants.ATTRIBUTES);
        this.balanceData = new BalanceData(data);
    }

    protected solidifyColumnData(): void {
        this.columns = [];
        let dataArray: any[] = this.getObjectArray(ServerConstants.ELEMENTS);
        for(let data of dataArray){
            let columnData: ColumnData = new ColumnData(data);
            this.columns.push(columnData);
        }
    }

    protected createReelDataArray(): void {
        this.reels = [];
        let symbolsArray: number[][] =
            [
                [],
                [],
                []
            ];
        for(let column of this.columns){
            for(let row: number = 0; row < column.getSymbols().length; row++){
                symbolsArray[row].push(column.getSymbolAt(row));
            }
        }
        for(let i: number = 0; i < symbolsArray.length; i++){
            let symbols: number[] = symbolsArray[i];
            this.createReelData(i, symbols);
        }
    }

    protected createReelData(index: number, symbols: number[]): void {
        let reelData: ReelData = new ReelData(index, symbols);
        this.reels.push(reelData);
    }

    public getBalanceData(): BalanceData {
        return this.balanceData;
    }

    public getReels(): ReelData[] {
        return this.reels;
    }

    public getReelAt(index: number): ReelData {
        return this.reels[index];
    }
}