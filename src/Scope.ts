import Parse from "./Parse";
import Functions from "./Functions";

/**
 * Подсчет выражений в скобках скобок
 */
export default class Scope {
    str: string;
    calculate: Parse;
    constructor(str = "") {
        this.str = Functions.removeSpaces(str);
        this.calculate = new Parse();
    }
    setString(str: string): void {
        this.str = Functions.removeSpaces(str);
    }
    parseAll(): string {
        while (this.parse());
        const indOpenPos: number = this.str.indexOf("(");
        if (indOpenPos >= 0) {
            throw new SyntaxError("Лишняя открываюая скобки");
        }
        return this.str;
    }
    parse(): boolean {
        const indClosePos: number = this.str.indexOf(")");
        if (indClosePos < 0) {
            return false;
        }
        const indOpenPos: number = this.findOpenScope(indClosePos);
        if (indOpenPos < 0) {
            throw new SyntaxError("Нет открывающей скобки");
        }
        const length: number = indClosePos - indOpenPos;
        const substr: string = this.str.substr(indOpenPos, length);
        if (substr == "") {
            throw new SyntaxError("Пустая скобка");
        }
        this.calculate.setString(substr);
        const res: number = this.calculate.parse();
        this.str = this.str.replace("(" + substr + ")", String(res));
        return true;
    }
    findOpenScope(ind: number): number {
        for (let i = ind - 1; i >= 0; i--) {
            if (this.str.charAt(i) === "(") {
                return i + 1;
            }
        }
        return -1;
    }
}
