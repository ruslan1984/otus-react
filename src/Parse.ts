import Operations from "./Operations";
import Functions from "./Functions";
/**
 * Подчет суммы в простой строке
 */
export default class Parse {
    str: string;
    constructor(str = "") {
        this.str = Functions.removeSpaces(str);
    }
    setString(str: string): void {
        this.str = Functions.removeSpaces(str);
    }
    parse(): number {
        if (!this.str) {
            throw new SyntaxError("Пустая стока");
        }
        while (this.parseOneOper("**"));
        while (this.parseOneOper("!"));
        while (this.parseTwoOper("^"));
        while (this.parseTwoOper("*"));
        while (this.parseTwoOper("/"));
        while (this.parseTwoOper("+"));
        while (this.parseTwoOper("-"));
        return Number(this.str);
    }
    parseOneOper(oper: string): boolean {
        const ind = this.str.substr(1).indexOf(oper) + 1;
        if (ind === 0) {
            return false;
        }
        const firstOper = this.findFirstOrerand(ind);
        let res: number;
        switch (oper) {
            case "**": {
                res = Operations.square(firstOper);
                break;
            }
            case "!": {
                res = Operations.factorial(firstOper);
                break;
            }
            default: {
                return false;
            }
        }
        const data = firstOper + oper;
        this.str = this.str.replace(data, String(res));

        return true;
    }
    parseTwoOper(oper: string): boolean {
        const ind = this.str.substr(1).indexOf(oper) + 1;
        if (ind === 0) {
            return false;
        }

        const firstOper = this.findFirstOrerand(ind);
        const secOper = this.findSecOrerand(ind);
        let res: number;

        switch (oper) {
            case "^": {
                res = Operations.degree(firstOper, secOper);
                break;
            }
            case "*": {
                res = Operations.mult(firstOper, secOper);
                break;
            }
            case "/": {
                res = Operations.div(firstOper, secOper);
                break;
            }
            case "+": {
                res = Operations.sum(firstOper, secOper);
                break;
            }
            case "-": {
                res = Operations.sub(firstOper, secOper);
                break;
            }
            default: {
                return false;
            }
        }

        const data = firstOper + oper + secOper;
        this.str = this.str.replace(data, String(res));
        this.str = Functions.replaseMinusMinus(this.str);
        return true;
    }
    findSecOrerand(ind: number): number {
        let num = "";
        for (let i = ind + 1; i < this.str.length; i++) {
            if (Functions.isNumber(this.str.charAt(i))) {
                num += this.str.charAt(i);
            } else {
                break;
            }
        }
        Functions.isCorrectNumber(num);
        return Number(num);
    }
    findFirstOrerand(ind: number): number {
        let num = "";
        for (let i = ind - 1; i >= 0; i--) {
            if (Functions.isNumber(this.str.charAt(i))) {
                num = this.str.charAt(i) + num;
            } else {
                break;
            }
        }
        Functions.isCorrectNumber(num);
        return Number(num);
    }
}
