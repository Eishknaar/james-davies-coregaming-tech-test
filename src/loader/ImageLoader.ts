export class ImageLoader {

    private spriteSheetPath: string;
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
        this.createPath();
        this.loadImages();
    }

    private createPath(): void {
        this.spriteSheetPath = "spritesheet/spritesheet.json";
    }

    private loadImages(): void {
        PIXI.loader
            .add(this.spriteSheetPath)
            .load(() => this.onAssetsLoaded());
    }

    public onAssetsLoaded(): void {
        this.onLoaded.call(this.scope);
    }


}