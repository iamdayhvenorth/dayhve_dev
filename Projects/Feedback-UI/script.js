const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
const ratingsEl = document.querySelectorAll("#rating");
let selectedRating = "";

ratingsEl.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (e) => {
        // console.log(e.target.innerText || e.target.parentNode.innerText);
        removeActive()
        selectedRating = e.target.innerText || e.target.parentNode.innerText
        // console.log(selectedRating);
        e.target.classList.add("active")
        e.target.parentNode.classList.add("active")

    });
});

const removeActive = () => {
    ratingsEl.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    })

}

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong> Thank You! </strong>
        <br>
        <br>
        <strong> Feedback: ${selectedRating} </strong>
        <p>We'll use your feedback to improve our customer support</p>
        `
    }
})