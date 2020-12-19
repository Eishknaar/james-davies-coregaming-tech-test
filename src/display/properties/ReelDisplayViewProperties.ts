import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class ReelDisplayViewProperties extends AbstractViewProperties {

    public rows: number
    public columns: number;

    constructor(position: PIXI.Point){
        super(position);
        this.setDefaultValues();
    }

    protected setDefaultValues(): void {
        this.columns = 5;
        this.rows = 2;
    }

}