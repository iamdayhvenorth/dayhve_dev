const hamburger = document.querySelector(".hamburger");
const navEl = document.querySelector(".active");
const closeBtn = document.querySelector(".close");

const listItems = document.querySelectorAll(".lists-bx li a")
const fullImgBx = document.querySelector(".img-full");
const fullImg = document.querySelector(".img-full img");
const imgClose = document.querySelector(".img-full span");


const imgElsOne = document.querySelectorAll(".left-grid img")
const imgElsTwo = document.querySelectorAll(".right-grid img")

let body = document.body.clientWidth;
console.log(navEl);

hamburger.onclick = () => {
    navEl.style.display = "block"
    // navEl.style.height = "100%"

    // navEl.style.transition = "transition: all 4s ease-in-out";
}

closeBtn.addEventListener("click", () => {
    navEl.style.display = "none"
    navEl.style.transition = "transition: all 4s ease-in-out";
})

listItems.forEach((item) => {
    item.addEventListener("click", () => {

navEl.style.display= "none"
    })
})



// imgElsOne.forEach((img) => {
//     img.addEventListener("click", (e) => {
//         console.log(e.target.src);
//         fullImgBx.style.display = "flex"
//         fullImg.src = e.target.src
//     })
// })

// imgElsTwo.forEach((img) => {
//     img.addEventListener("click", (e) => {
//         fullImgBx.style.display = "flex"
//         fullImg.src = e.target.src
//     })
// })

imgElsOne.forEach((img) => {
    img.onclick = function () {
        loadImg(this.src)
    }
})
imgElsTwo.forEach((img) => {
    img.onclick = function () {
        loadImg(this.src)
    }
})

imgClose.onclick = () => {
    fullImgBx.style.display = "none"
}

function loadImg(image) {
    fullImgBx.style.display = "flex"
    fullImg.src = image
}
