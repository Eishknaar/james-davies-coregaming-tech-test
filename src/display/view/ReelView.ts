import {AbstractGameView} from "../../abstract/display/view/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/display/properties/AbstractViewProperties";
import {ReelViewProperties} from "../properties/ReelViewProperties";
import {Panel} from "../../abstract/display/view/Panel";
import {CellView} from "./CellView";

export class ReelView extends AbstractGameView {

    protected properties: ReelViewProperties;

    protected panel: Panel;
    protected cells: CellView[];

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelViewProperties> properties;
    }

    protected create(): void {
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

}