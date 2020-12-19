import {AbstractView} from "../../abstract/AbstractView";
import {ReelDisplayViewProperties} from "../properties/ReelDisplayViewProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class ReelDisplayView extends AbstractView {

    protected properties: ReelDisplayViewProperties;

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <ReelDisplayViewProperties>properties;
    }

    protected create(): void {
        super.create();
        this.createBackground();
        this.createPanel();
        this.createReels();
    }

    protected createBackground(): void {

    }

    protected createPanel(): void {

    }

    protected createReels(): void {

    }

    protected createReel(): void {

    }

}