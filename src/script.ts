import App from "./app";
const input: HTMLInputElement =
    document.querySelector(".input") ?? new HTMLInputElement();
const button: HTMLButtonElement | null = document.querySelector(".button");

if (button) {
    button.addEventListener("click", () => {
        try {
            const result = App.main(input.value);
            alert(result);
        } catch (e) {
            alert("Не допустимая строка");
            console.error(e);
        }
    });
}
