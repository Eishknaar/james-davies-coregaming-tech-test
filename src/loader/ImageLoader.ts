import {GameStyle} from "../style/GameStyle";

export class ImageLoader {

    private imageNames: string[];
    private paths: string[];
    private onLoaded: Function;
    private scope: any;

    constructor(onLoaded: Function, scope: any) {
        this.initialise(onLoaded, scope);
        this.create();
    }

    protected initialise(onLoaded: Function, scope: any): void {
        this.onLoaded = onLoaded;
        this.scope = scope;
    }

    protected create(): void {
        this.createImageNames();
        this.createPaths();
        this.loadImages();
    }

    private createImageNames(): void {
        this.imageNames = GameStyle.getAllValues();
    }

    private createPaths(): void {
        this.paths = [];
        for(let imageName of this.imageNames){
            this.createPath(imageName)
        }
    }

    private createPath(name: string){
        let path: string = "assets/" + name + ".png"
        this.paths.push(path);
    }

    private loadImages(): void {
        PIXI.loader.add(this.paths).load(() => this.onAssetsLoaded());
    }

    public onAssetsLoaded(): void {
        this.onLoaded.call(this.scope);
    }




}