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

export function grammarList() {
    const result = data.map((item) => {
        return {
            id: item.id,
            name: item.name,
        };
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

export const grammarDetail = (id: number) => {
    let result: any;
    data.forEach((item) => {
        if (id == item.id) {
            result = {
                name: item.name,
                text: item.text,
            };
        }
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
};
export function updateDetail(id: number, update_data: any) {
    data = data.map((item) => {
        if (id == item.id) {
            return {
                id: item.id,
                name: update_data.name,
                text: update_data.text,
            };
        }
        return item;
    });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
}
