export const getTopName = (data: any): any => {
    data.sort((a: any, b: any) => {
        if (a.score < b.score) {
            return 1;
        }
        if (a.score > b.score) {
            return -1;
        }
        return 0;
    });
    return data[0].name;
};

export const createQs = (data: any) => {
    let res = Object.keys(data).reduce((a: any, b: any, ind: number, d) => {
        if (ind === 1) {
            a = a + "=" + data[a];
        }
        return a + "&" + b + "=" + data[b];
    });
    return "?" + res;
};

export const parseQs = (qs: string) => {
    const str: string = qs.slice(1);
    var myarr1 = str.split("&");
    const l = myarr1.reduce((a: any, b: any, ind) => {
        let c = [];
        if (ind === 1) {
            let a1: any = a.split("=");
            c[a1[0]] = a1[1];
            a = [];
        }
        let b1: any = b.split("=");
        c[b1[0]] = b1[1];
        return { ...a, ...c };
    });
    return l;
};
