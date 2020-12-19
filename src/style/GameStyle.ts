export class GameStyle {

    public static BANANA: string = "banana";

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
