let data = {
    user: "admin",
    password: "123",
};
const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

export const login = async (name: string, password: string): boolean => {
    await sleep(1000);
    if (name === data.user && password === data.password) {
        localStorage.setItem("auth", name);
        return true;
    }
    return false;
};

export const logout = async (): void => {
    await sleep(1000);
    localStorage.removeItem("auth");
};

export const isAuthorised = async (): boolean => {
    await sleep(1000);
    return localStorage.getItem("auth") === data.user;
};
