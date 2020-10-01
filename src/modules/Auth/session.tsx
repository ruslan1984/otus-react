import { sleep } from "@/functions";
import { data } from "./data";

export const login = async (user: string) => {
  await sleep(200);
  localStorage.setItem("auth", user);
};
export const logout = async () => {
  await sleep(200);
  localStorage.removeItem("auth");
};
export const isAuthorised = async () => {
  await sleep(200);
  return localStorage.getItem("auth") === data.user;
};
