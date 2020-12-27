import * as convert from "xml-js";
import {SpinResponse} from "./api/SpinResponse";

export class Server {

    public static URL: string = "http://localhost:8888/serve";

    private request: XMLHttpRequest;

    constructor(){
        this.create();
        this.spin(100, 1.20, this.handleSpinResponse, this);
    }

    private create(): void {
        this.createRequest();
    }

    private createRequest(): void {
        this.request = new XMLHttpRequest();
        this.request.open("POST", Server.URL, true);
    }

    public spin(balance: number, stake: number, handler:Function, handlerScope: any): void {
        this.request.onload = function(){handler.call(handlerScope, this.responseText)};
        let xml: string = this.convertToXml(balance, stake);
        this.request.send(xml);
    }

    private convertToXml(currentBalance: number, currentStake: number): string {
        let balance: string = currentBalance.toFixed(2);
        let stake: string = currentStake.toFixed(2);
        return `<Request balance="${balance}" stake="${stake}" />`
    }

    public handleSpinResponse(response: any): void {
        let json: string = convert.xml2json(response);
        let realJson = JSON.parse(json);
        let spin: SpinResponse = new SpinResponse(realJson.elements[0]);
        console.log(spin);
    }
}