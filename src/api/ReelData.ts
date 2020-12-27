export class ReelData {

    protected id: number;
    protected symbols: number[];

    constructor(index: number, symbols: number[]) {
        this.id = index;
        this.symbols = symbols;
    }

    public getId(): number {
        return this.id;
    }

    public getSymbols(): number[] {
        return this.symbols;
    }

    public getSymbolAt(index: number): number {
        return this.symbols[index];
    }
}

