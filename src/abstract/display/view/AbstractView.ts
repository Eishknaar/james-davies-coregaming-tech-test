import {AbstractViewProperties} from "../properties/AbstractViewProperties";

export class AbstractView extends PIXI.Container {

    protected coreProperties: AbstractViewProperties;

    constructor(properties: AbstractViewProperties) {
        super();
        this.createProperties(properties);
        this.initialise();
    }

    protected createProperties(properties: AbstractViewProperties): void {
        this.coreProperties = properties;
    }

    protected initialise(): void {
        this.position = this.coreProperties.position;
    }

    public destroy(): void {
        super.destroy();
        this.coreProperties = null;
    }

}