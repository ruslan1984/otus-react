import Operations from "./Operations";
import Functions from "./Functions";

/**
 * Подчет суммы в простой строке
 */
export default class Polish {
    str: string;
    constructor(str = "") {
        this.str = str;
    }
    setString(str: string): void {
        this.str = str;
    }
    parse(): number {
        if (!this.str) {
            throw new SyntaxError("Пустая стока");
        }
        while (this.oneIter());
        return Number(this.str);
    }

    oneIter(): boolean {
        for (let i = 1; i < this.str.length; i++) {
            const curSim = this.str.charAt(i);
            if (!Functions.isNumber(curSim) && curSim !== " ") {
                const secOper = this.findOrerand(i - 1);
                const firstOper = this.findOrerand(
                    i - String(secOper).length - 2
                );
                this.moveOper(firstOper, secOper, curSim);
                return true;
            }
        }
        return false;
    }

    moveOper(firstOper: number, secOper: number, oper: string): boolean {
        const ind = this.str.substr(1).indexOf(oper) + 1;
        if (ind === 0) {
            return false;
        }
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
        const data = firstOper + " " + secOper + " " + oper;
        this.str = this.str.replace(data, String(res));
        this.str = Functions.replaseMinusMinus(this.str);
        return true;
    }

    findOrerand(ind: number): number {
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
