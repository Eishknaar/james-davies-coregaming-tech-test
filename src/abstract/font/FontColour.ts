export class FontColour {

    private colours: string | string[];
    private gradient: number;

    constructor(colours: string | string[], isGradientVertical?: boolean){
        this.colours = colours;
        this.gradient = isGradientVertical ? 1 : 0;
    }

    public getColours(): string | string[] {
        return this.colours;
    }

    public getGradient(): number {
        return this.gradient;
    }

}