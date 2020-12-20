import {AbstractViewProperties} from "./AbstractViewProperties";

export class PanelProperties extends AbstractViewProperties {

    public columns: number;
    public rows: number;
    public horizontalSpacing: number;
    public verticalSpacing: number;

    constructor(columns: number, rows: number, horizontalSpacing?: number, verticalSpacing?: number, position?: PIXI.Point) {
        super(position);
        this.columns = columns;
        this.rows = rows;
        this.horizontalSpacing = horizontalSpacing ? horizontalSpacing : 0;
        this.verticalSpacing = verticalSpacing ? verticalSpacing : 0
    }

}