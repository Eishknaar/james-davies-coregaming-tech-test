import {AbstractViewProperties} from "./AbstractViewProperties";

export class AbstractView extends PIXI.Container {

    protected coreProperties: AbstractViewProperties;

    constructor(properties: AbstractViewProperties) {
        super();
        this.createProperties(properties);
        this.initialise();
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties): void {
        this.coreProperties = properties;
    }

    protected initialise(): void {
        this.position = this.coreProperties.position;
    }

    protected create(): void {

    }

}