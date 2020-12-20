export class Dictionary <V, K> {
    protected values: V[];
    protected keys: K[];

    constructor() {
        this.values = [];
        this.keys = [];
    }

    public set(value: V, key: K): void {
        let index: number = this.keys.indexOf(key);
        if(index == -1) {
            this.values.push(value);
            this.keys.push(key);
        }
        else{
            this.values[index] = value;
        }
    }

    public getValue(key: K): V {
        let index: number = this.keys.indexOf(key);
        return this.values[index];
    }

    public getValues(): V[] {
        return this.values;
    }

    public getKeys(): K[] {
        return this.keys;
    }


}