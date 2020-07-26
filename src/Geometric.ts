import Operations from "./Operations";
import Functions from "./Functions";

/**
 * Подчет суммы в простой строке
 */
export default class Geometric {
    str: string;
    constructor(str = "") {
        this.str = Functions.removeSpaces(str);
    }
    setString(str: string): void {
        this.str = Functions.removeSpaces(str);
    }

    parse(): string {
        while (this.parseSim("sin"));
        while (this.parseSim("cos"));
        while (this.parseSim("tn"));
        while (this.parseSim("ctg"));
        while (this.parseSim("fib"));

        this.str = Functions.replasePlusMinus(this.str);
        return this.str;
    }
    parseSim(oper: string): boolean {
        const ind = this.str.indexOf(oper);
        if (ind < 0) {
            return false;
        }
        const val: number = this.findVal(ind, oper);
        let res: number;
        if (ind < 0) {
            return false;
        }
        switch (oper) {
            case "sin": {
                res = Operations.sin(val);
                break;
            }
            case "cos": {
                res = Operations.cos(val);
                break;
            }
            case "tn": {
                res = Operations.tn(val);
                break;
            }
            case "ctg": {
                res = Operations.ctn(val);
                break;
            }
            case "fib": {
                res = Operations.fib(val);
                break;
            }

            default: {
                return false;
            }
        }
        const data = oper + "(" + val + ")";
        this.str = this.str.replace(data, String(res));
        return true;
    }
    findVal(ind: number, oper: string): number {
        let res = "";
        for (let i = ind + oper.length + 1; i < this.str.length; i++) {
            if (this.str.charAt(i) === ")") {
                break;
            }
            res += this.str.charAt(i);
        }
        if (!Functions.isNumber(res)) {
            throw new SyntaxError(oper + " не число");
        }
        return Number(res);
    }
}
