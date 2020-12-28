export class KeyValuePair<K, V> {

    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    public getKey(): K {
        return this.key;
    }

    public getValue(): V {
        return this.value;
    }

}