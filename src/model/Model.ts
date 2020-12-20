export class Model{

    private spinsRemaining: number;

    constructor(){

    }

    public setSpinsRemaining(spins: number): void {
        this.spinsRemaining = spins;
    }

    public getSpinsRemaining(): number {
        return this.spinsRemaining;
    }

    public decrementSpins(): void {
        this.spinsRemaining--;
    }

}