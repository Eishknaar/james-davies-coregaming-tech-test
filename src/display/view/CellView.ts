import {AbstractView} from "../../abstract/AbstractView";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {CellViewProperties} from "../properties/CellViewProperties";

export class CellView extends AbstractView {

    protected properties: CellViewProperties;

    protected createProperties(properties:AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <CellViewProperties> properties;
    }

    protected create(): void {
        this.createSymbol();
        this.createSpinAnim();
    }

    protected createSymbol(): void {

    }

    protected createSpinAnim(): void {

    }
}
