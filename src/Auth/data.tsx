import { sleep } from "@/functions";
export let data = {
    user: "root",
    password: "root",
};
export const login = async (user: string, password: string) => {
    await sleep(200);

    return user == data.user && password == data.password;
};

export const logout = async () => {
    await sleep(200);
    localStorage.removeItem("auth");
};

export const isAuthorised = async () => {
    await sleep(200);
    return localStorage.getItem("auth") === data.user;
};
