import * as R from "ramda";

import { grammar } from "./types";
import { sleep } from "@/functions";

const data: Array<grammar> = [
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
  await sleep(1000);
  return R.project(["id", "name"], data);
}

export const grammarDetail = async (id: number) => {
  await sleep(1000);
  return data.find((item) => item.id == id);
};

export async function updateDetail(id: number, updateData: grammar) {
  await sleep(1000);
  const update: grammar | undefined = data.find((item) => item.id == id);
  if (!update) return false;
  update.name = updateData.name;
  update.text = updateData.text;
  return true;
}
