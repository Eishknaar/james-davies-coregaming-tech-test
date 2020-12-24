import {Model} from "../model/Model";
import {Factory} from "../factory/Factory";

export class AbstractController {

    protected model: Model;
    protected factory: Factory;

    constructor(factory: Factory) {
        this.createFactory(factory);
        this.createModel();
        this.addEventListeners()
        this.initialise();
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected createModel(): void {
        this.model = this.factory.getModel();
    }

    protected addEventListeners(): void {

    }

    protected initialise(): void {

    }

    protected addEventListener(event: string, handler: Function, scope: any): void {
        this.model.addEventListener(event, handler, scope);
    }

    protected dispatchEvent(event: string): void {
        this.model.dispatchEvent(event);
    }
}