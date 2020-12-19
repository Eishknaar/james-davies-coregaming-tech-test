import {AbstractGameView} from "../../abstract/AbstractGameView";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";
import {CellViewProperties} from "../properties/CellViewProperties";
import {Sprite} from "../../tools/view/Sprite";

export class CellView extends AbstractGameView {

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
        let symbol: Sprite = new Sprite(this.properties.symbolProperties);
        this.addChild(symbol);
    }

    protected createSpinAnim(): void {

    }
}
