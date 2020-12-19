import {AbstractGameView} from "../../abstract/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {ReelViewProperties} from "../properties/ReelViewProperties";

export class ReelView extends AbstractGameView {

    protected properties: ReelViewProperties;

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelViewProperties> properties;
    }

    protected create(): void {
        this.createPanel();
        this.createCells();
    }

    protected createPanel(): void {

    }

    protected createCells(): void {

    }

}