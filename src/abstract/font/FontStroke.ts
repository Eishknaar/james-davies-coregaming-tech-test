export class FontStroke {

    private colour: string;
    private thickness: number;
    private lineJoin: string;
    private miterLimit: number;

    constructor(colour: string, thickness: number) {
        this.colour = colour;
        this.thickness = thickness;
        this.initialise();
    }

    protected initialise(): void {
        this.lineJoin = "miter"
        this.miterLimit = 10;
    }

    public getColour(): string {
        return this.colour;
    }

    public getThickness(): number {
        return this.thickness
    }

    public getLineJoin(): string {
        return this.lineJoin;
    }

    public getMiterLimit(): number {
        return this.miterLimit;
    }

}