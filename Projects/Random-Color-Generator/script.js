const contEl = document.querySelector(".container");



for (let index = 0; index < 32; index++) {

    const colorContEl = document.createElement("div");
    colorContEl.classList.add("color-container");
    contEl.appendChild(colorContEl)
}

const colorConEls = document.querySelectorAll(".color-container");

generateColorCode()

function generateColorCode() {
    colorConEls.forEach((colorContEl) => {
        const newColorCode = randomColor()
        colorContEl.innerText = `#${newColorCode}`
        colorContEl.style.backgroundColor = `#${newColorCode}`
    })

}

function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let color = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomNum, randomNum + 1)

    }
    return color;
}

