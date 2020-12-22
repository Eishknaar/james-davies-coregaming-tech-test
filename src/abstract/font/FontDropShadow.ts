export class FontDropShadow {

    protected angle: number;
    protected blur: number;
    protected color: string;
    protected distance: number;

    constructor(color: string, distance: number, angle: number, blur: number) {
        this.color = color;
        this.distance = distance;
        this.angle = angle;
        this.blur = blur;
    }

    public getAngle(): number {
        return this.angle;
    }

    public getBlur(): number {
        return this.blur;
    }

    public getColor(): string {
        return this.color;
    }

    public getDistance(): number {
        return this.distance;
    }

}