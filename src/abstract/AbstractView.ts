import {AbstractViewProperties} from "./AbstractViewProperties";
import {Factory} from "../factory/Factory";

export class AbstractView extends PIXI.Container {

    protected coreProperties: AbstractViewProperties;
    protected factory: Factory;

    constructor(factory: Factory, properties: AbstractViewProperties) {
        super();
        this.createProperties(properties);
        this.createFactory(factory);
        this.initialise();
        this.create();
    }

    protected createProperties(properties: AbstractViewProperties): void {
        this.coreProperties = properties;
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected initialise(): void {
        this.position = this.coreProperties.position;
    }

    protected create(): void {

    }

}