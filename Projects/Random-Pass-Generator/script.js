const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const copyEl = document.querySelector(".fa-copy")
console.log(copyEl);
const alertEl = document.querySelector(".alert-container")


btnEl.addEventListener("click", () => {
    createPassword()
})
copyEl.addEventListener("click", () => {
    copyPassword()
    if (inputEl.value) {
        alertEl.classList.remove("active")
        setTimeout(() => {
            alertEl.classList.add("active")
        }, 1000)
    }
})

function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const passwordLength = 14
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    inputEl.value = password
    alertEl.innerText = ` ${password} Copied!
    `
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);


}