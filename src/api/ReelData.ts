import {AbstractSolidifyable} from "./AbstractSolidifyable";
import {ServerConstants} from "./constants/ServerConstants";

export class ReelData extends AbstractSolidifyable {

    protected column: number;
    protected symbols: number[];

    protected solidify() {
        super.solidify();
        this.column = this.getNumber(ServerConstants.COLUMN_ID);
        this.symbols = this.getNumberArray(ServerConstants.SYMBOLS);
    }

    public getColumn(): number {
        return this.column;
    }

    public getSymbols(): number[] {
        return this.symbols;
    }

    public getSymbolAt(index: number): number {
        return this.symbols[index];
    }

}