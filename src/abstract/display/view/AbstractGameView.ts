import {AbstractViewProperties} from "../properties/AbstractViewProperties";
import {AbstractView} from "./AbstractView";
import {Factory} from "../../factory/Factory";
import {Model} from "../../model/Model";

export class AbstractGameView extends AbstractView {

    protected factory: Factory;
    protected model: Model;

    constructor(factory: Factory, properties: AbstractViewProperties) {
        super(properties);
        this.createFactory(factory);
        this.createModel();
        this.create();
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected createModel(): void {
        this.model = this.factory.getModel();
    }

    protected create(): void {

    }

}