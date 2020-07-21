export default class Operations {
    static sum(a: number, b: number): number {
        return a + b;
    }
    static sub(a: number, b: number): number {
        return a - b;
    }
    static mult(a: number, b: number): number {
        return a * b;
    }
    static div(a: number, b: number): number {
        return a / b;
    }
    static sin(num: number): number {
        return Math.sin(num);
    }
    static cos(num: number): number {
        return Math.cos(num);
    }
    static tn(num: number): number {
        return Math.tan(num);
    }
    static ctn(num: number): number {
        return 1 / Math.tan(num);
    }
    static degree(num: number, degree: number): number {
        return Math.pow(num, degree);
    }
    static square(num: number): number {
        return num * num;
    }
    static factorial(num: number): number {
        if (num === 0) return 0;
        let l = 1;
        for (let i = 2; i <= num; i++) {
            l *= i;
        }
        return l;
    }
    static fib(num: number): number {
        if (num === 0) return 0;
        let l1 = 0;
        let l2 = 1;
        let l3 = 0;
        for (let i = 1; i <= num; i++) {
            l3 = l2 + l1;
            l1 = l2;
            l2 = l3;
        }
        return l2;
    }
}
