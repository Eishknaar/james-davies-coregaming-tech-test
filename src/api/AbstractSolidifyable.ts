import {ServerConstants} from "./constants/ServerConstants";

export class AbstractSolidifyable {

    public data: any;

    constructor(data: any){
        this.data = data;
        this.solidify();
        this.create();
    }

    protected solidify(): void {

    }

    protected create(): void {

    }

    protected getObject(name: string): any {
        return this.data[name];
    }

    protected getObjectArray(name:string): any[] {
        let objectArray: any[] = [];
        let dataArray: any[] = this.data[name];
        for(let data of dataArray){
            let attributes: any = data[ServerConstants.ATTRIBUTES];
            objectArray.push(attributes);
        }
        return objectArray;
    }

    protected getNumberArray(name: string): number[] {
        let data: string = this.data[name];
        let dataArray: string[] = data.split(",");
        let numberArray: number[] = [];
        for(let value of dataArray){
            numberArray.push(Number(value));
        }
        return numberArray;
    }

    protected getNumber(name: string): number {
        let data: string = this.data[name];
        return Number(data);
    }

}