import { GrammarList } from "./types";
import { sleep } from "@/functions";
import * as R from "ramda";

let data = [
  {
    id: 1,
    name: "Страница 1",
    text: "Контент 1",
  },
  {
    id: 2,
    name: "Страница 2",
    text: "Контент 2",
  },
];

export async function grammarList() {
  await sleep(500);
  return R.project(["id", "name"], data);
}

export const grammarDetail = (id: number) => {
  let result: GrammarList;
  data.forEach((item) => {
    if (id == item.id) {
      result = {
        name: item.name,
        text: item.text,
      };
    }
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 200);
  });
};
export function updateDetail(id: number, updateData: GrammarList) {
  data = data.map((item) => {
    if (id == item.id) {
      return {
        id: item.id,
        name: updateData.name,
        text: updateData.text,
      };
    }
    return item;
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });
}
