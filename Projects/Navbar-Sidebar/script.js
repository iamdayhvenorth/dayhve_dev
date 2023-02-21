const contactEl = document.querySelector(".contact")
const courseEl = document.querySelector(".course")

const carretIcon = document.querySelector(".contact .bi-caret-down-fill");
const carreTT = document.querySelector(".course .bi-caret-down-fill");
const contactMenusEl = document.querySelector("#sub-menu");
const courseMenusEl = document.querySelector("#course-menu");
console.log(carreTT);
console.log(carretIcon);



contactEl.addEventListener("click", (e) => {
    // console.log(e.target.parentNode);
    if (contactEl) {
        // console.log(carretIcon)
        carret(carretIcon)
        if (contactMenusEl.style.display !== "block") {
            contactMenusEl.style.display = "block"
        } else {
            contactMenusEl.style.display = "none"
        }
    }
})


courseEl.addEventListener("click", (e) => {
    // console.log(e.target.parentNode);
    if (e.target.parentNode || e.target) {
        // console.log(carretIcon)
        carret(carreTT)
        if (courseMenusEl.style.display !== "block") {
            courseMenusEl.style.display = "block"
        } else {
            courseMenusEl.style.display = "none"
        }
    }
})

function carret(div) {
    div.classList.toggle("toggle")
}

