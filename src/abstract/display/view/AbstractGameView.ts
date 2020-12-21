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
        this.addEventListeners();
        this.create();
    }

    protected createFactory(factory: Factory): void {
        this.factory = factory;
    }

    protected createModel(): void {
        this.model = this.factory.getModel();
    }

    protected addEventListeners(): void {

    }

    protected create(): void {

    }

    protected addEventListener(event: string, handler: Function, scope: any): void {
        this.model.addEventListener(event, handler, scope);
    }

    protected dispatchEvent(event: string): void {
        this.model.dispatchEvent(event);
    }

    protected callAfter(delay: number, handler: Function, scope: any, ...args: any[]): void {
        setTimeout(() => {
            handler.call(scope, args)
        }, delay);
    }

}