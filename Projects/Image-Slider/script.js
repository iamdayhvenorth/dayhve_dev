const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgContEl = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");

let currentImg = 1
let timeout;
nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
    // console.log(currentImg);
})
prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
    // console.log(currentImg);
});


updateImg();

function updateImg() {
    if (currentImg > imgEls.length) {
        currentImg = 1
    } else if (currentImg < 1) {
        currentImg = imgEls.length
    }
    imgContEl.style.transform = `translate(-${(currentImg - 1) * 500}px)`
    timeout = setTimeout(() => {
        currentImg++
        updateImg()
    }, 3000)
}