import {AbstractViewProperties} from "./AbstractViewProperties";
import {AbstractView} from "./AbstractView";
import {Factory} from "../factory/Factory";

export class AbstractGameView extends AbstractView {

    protected factory: Factory;

    constructor(factory: Factory, properties: AbstractViewProperties) {
        super(properties);
        this.createFactory(factory);
        this.create();
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected create(): void {

    }

}