import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ReelViewProperties} from "../properties/ReelViewProperties";
import {Panel} from "../../abstract/display/view/Panel";
import {CellView} from "./CellView";
import {ReelData} from "../../api/ReelData";

export class ReelView extends AbstractGameView {

    protected properties: ReelViewProperties;

    protected panel: Panel;
    protected cells: CellView[];

    private reelData: ReelData;

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelViewProperties> properties;
    }

    protected create(): void {
        super.create();
        this.createPanel();
        this.createCells();
    }

    protected createPanel(): void {
        this.panel = new Panel(this.properties.panelProperties);
        this.addChild(this.panel);
    }

    protected createCells(): void {
        this.cells = [];
        for(let i: number = 0; i < this.properties.numberOfCells; i++) {
            this.createCell();
        }
        this.panel.refresh();
    }

    protected createCell(): void {
        let cell: CellView = this.factory.createCell();
        this.cells.push(cell);
        this.panel.addToPanel(cell);
    }

    public spin(): void {
        let delay: number = 0;
        for(let i: number = 0; i < this.cells.length; i++){
            this.callAfter(delay, this.spinCell, this, i);
            delay += this.properties.spinDelay;
        }
    }

    public spinCell(index: number): void {
        let cell: CellView = this.cells[index];
        cell.spin();
    }


    public stop(reelData: ReelData): void {
        this.reelData = reelData;
        let delay: number = 0;
        for(let i: number = 0; i < this.cells.length; i++){
            this.callAfter(delay, this.stopCell, this, i);
            delay += this.properties.spinDelay;
        }
    }

    public stopCell(index: number): void {
        let cell: CellView = this.cells[index];
        let symbol: number = this.reelData.getSymbolAt(index);
        cell.stop(symbol);
    }

}