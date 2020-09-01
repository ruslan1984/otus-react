//3.1
import {
    compose,
    sort,
    ascend,
    prop,
    reverse,
    replace,
    take,
    split,
    toString,
} from "ramda";

//3.1
const topScore = (teams: any) => sort(ascend(prop("score")), teams);
const getFirst = (teams: any) => {
    return take(1, teams)[0];
};
export const getTopName3 = compose(prop("name"), getFirst, reverse, topScore);

//3.2
const addSymbolQuestion = (data: any) => replace(data, "?" + data, data);
export const createQs3 = compose(
    addSymbolQuestion,
    replace(/[ {}\"]/g, ""),
    replace(/:/g, "="),
    replace(/:/g, "="),
    toString
);

//3.3
const removeFirst = (data: string) => {
    return data.slice(1);
};

const split1 = (data: any) => {
    const res = split("&", data);
    return res;
};
const split2 = (data: any) => {
    const l: any = {};
    data.forEach((item: string) => {
        const res = split("=", item);
        const key = res[0];
        const val = res[1];
        l[key] = val;
    });
    return l;
};
export const parseQs3 = compose(split2, split1, removeFirst);
