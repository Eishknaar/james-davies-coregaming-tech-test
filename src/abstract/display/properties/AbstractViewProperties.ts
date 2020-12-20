export class AbstractViewProperties {

    public position: PIXI.Point;

    constructor(position?: PIXI.Point){
        this.position = position ? position : new PIXI.Point(0, 0);
    }

}