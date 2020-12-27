import * as convert from "xml-js";

export class Server {

    public static URL: string = "http://localhost:8888/serve";

    private request: XMLHttpRequest;

    constructor(){
        this.create();
    }

    private create(): void {
        this.createRequest();
    }

    private createRequest(): void {
        this.request = new XMLHttpRequest();
    }

    public spin(balance: number, stake: number, handler:Function, handlerScope: any): void {
        this.request.open("POST", Server.URL, true);
        let localHandler: Function = this.handleRequestLoaded;
        let localScope: Server = this;
        let xml: string = this.convertToXml(balance, stake);
        this.request.onload = function(){
            localHandler.call(
                localScope,
                this.responseText, handler, handlerScope
            )
        };
        this.request.send(xml);
    }

    private convertToXml(currentBalance: number, currentStake: number): string {
        let balance: string = currentBalance.toFixed(2);
        let stake: string = currentStake.toFixed(2);
        return `<Request balance="${balance}" stake="${stake}" />`
    }

    public handleRequestLoaded(response: string, handler: Function, handlerScope: any): void {
        let json: string = convert.xml2json(response);
        let realJson = JSON.parse(json);
        let data: any = realJson.elements[0];
        handler.call(handlerScope, data);
    }
}