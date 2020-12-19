export class GameStyle {

    public static BANANA: string = "banana";
    public static SEQUENCE0001: string = "sequence0001";
    public static SEQUENCE0002: string = "sequence0002";
    public static SEQUENCE0003: string = "sequence0003";
    public static SEQUENCE0004: string = "sequence0004";
    public static SEQUENCE0005: string = "sequence0005";
    public static SEQUENCE0006: string = "sequence0006";

    public static getAllValues(): string[] {
        let values: string[] = [];
        for (let property in GameStyle) {
            if(typeof GameStyle[property] != "function") {
                values.push(GameStyle[property]);
            }
        }
        return values;
    }
}
