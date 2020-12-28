class PixiManager {

    public renderer: PIXI.SystemRenderer;
    public canvas: HTMLCanvasElement;
    public stage: PIXI.Container;

    private width: number;
    private height: number;
    private ratio: number;

    constructor(){
        this.initialise();
        this.setScene();
        this.resize();
        this.render();
    }

    private initialise(): void {
        this.width = 1920;
        this.height = 1080;
        this.ratio = this.width/this.height;
        window.onresize = () => this.resize();
    }

    private setScene(): void {
        this.renderer = PIXI.autoDetectRenderer({
            width: this.width,
            height: this.height,
            transparent: false,
            resolution: this.ratio,
            antialias: true
        });

        this.canvas = this.renderer.view;
        this.canvas.id = "canvas";
        document.body.appendChild(this.canvas);

        this.stage = new PIXI.Container();
    }

    private resize(): void {
        let screenWidth: number = window.innerWidth;
        let screenHeight: number = window.innerHeight;
        let screenRatio: number = screenWidth/screenHeight;

        let newWidth: number;
        let newHeight: number;

        if (screenRatio >= this.ratio) {
            newWidth = window.innerHeight * this.ratio;
            newHeight = window.innerHeight;
        } else {
            newWidth = window.innerWidth;
            newHeight = window.innerWidth / this.ratio;
        }
        this.renderer.view.style.width = newWidth + 'px';
        this.renderer.view.style.height = newHeight + 'px';
    }


    private render(): void {
        this.renderer.render(this.stage);

        requestAnimationFrame(() => this.render());
    }


}

export default new PixiManager();