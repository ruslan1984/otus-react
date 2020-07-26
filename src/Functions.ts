export default class Functions {
    static removeSpaces(str: string): string {
        return str.split(" ").join("");
    }
    static replasePlusMinus(str: string): string {
        return str.split("+-").join("-");
    }
    static replaseMinusMinus(str: string): string {
        return str.split("--").join("-");
    }
    static isNumber(num: string): boolean {
        return !isNaN(parseFloat(num)) || num === "."; // && isFinite(num);
    }
    static isCorrectNumber(num: string): void {
        if (num === "") {
            throw new SyntaxError(" Пустое число");
        }
        const count: number = num.split(".").length - 1;
        if (count > 1) {
            throw new SyntaxError("Несколько точек в числе");
        }
    }
}
