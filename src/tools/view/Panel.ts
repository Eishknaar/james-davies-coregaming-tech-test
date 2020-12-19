import {AbstractView} from "../../abstract/AbstractView";
import {PanelProperties} from "../properties/PanelProperties";
import {AbstractViewProperties} from "../../abstract/AbstractViewProperties";

export class Panel extends AbstractView {

    protected properties: PanelProperties;
    protected objects: PIXI.DisplayObject[];

    protected createProperties(properties: AbstractViewProperties): void {
        super.createProperties(properties);
        this.properties = <PanelProperties>properties;
    }

    protected initialise(): void {
        super.initialise();
        this.objects = [];
    }

    public addToPanel(object: PIXI.DisplayObject): void {
        this.objects.push(object);
    }

    public refresh(): void {
        this.removeChildren();
        this.createObjects();
    }

    protected createObjects(): void {
        for(let i:number = 0; i < this.objects.length; i++){
            this.createObject(i);
        }
    }

    protected createObject(index: number): void {
        let object: PIXI.DisplayObject = this.objects[index];
        let bounds: PIXI.Rectangle = object.getBounds();
        object.x = (index % this.properties.columns) * (bounds.width + this.properties.horizontalSpacing);
        object.y = Math.floor(index / this.properties.columns) * (bounds.height + this.properties.verticalSpacing);
        this.addChild(object);
    }

}