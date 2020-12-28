export class Dictionary<K, V> {
    protected keys: K[];
    protected values: V[];

    constructor() {
        this.values = [];
        this.keys = [];
    }

    public set(key: K, value: V): void {
        let index: number = this.keys.indexOf(key);
        if (index == -1) {
            this.values.push(value);
            this.keys.push(key);
        } else {
            this.values[index] = value;
        }
    }

    public getValue(key: K): V {
        let index: number = this.keys.indexOf(key);
        if (index != -1) {
            return this.values[index];
        } else {
            throw new Error("Dictionary does not contain key '" + key + "'");
        }
    }

    public getValues(): V[] {
        return this.values;
    }

    public getKeys(): K[] {
        return this.keys;
    }


}