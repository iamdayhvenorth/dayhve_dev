const cards = document.querySelector("#cards")
const inputEl = document.getElementById("input")

window.addEventListener("DOMContentLoaded", loadContent);

function loadContent() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(hero => {
                let { name, powerstats, appearance, images } = hero
                let { gender } = appearance
                let { md } = images
                let { strength, power, intelligence, speed, durability, combat } = powerstats

                return cards.innerHTML += `
                <div class="card" id="items">
                 <img class="images"src= ${md}>
                <div class="hero-info" >
                <h2 class="name">name: <span>${name}</span></h2>
                <h2 class="gender">gender: <span>${gender}</span></h2>
                <p class="powerstats">intelligence: <span>${intelligence}</span> </p>
                <p class="powerstats">speed: <span>${speed}</span></p>
                <p class="powerstats">durability: <span>${durability}</span></p>
                <p class="powerstats">combat: <span>${combat}</span></p>
                <p class="powerstats">power: <span>${power}</span></p>
                <p class="powerstats">strength: <span>${strength}</span></p>

            </div>
        </div>

                `
            });
        })
        .catch(error => console.log(error))

}



// let currentPage = 1;
// let rows = 5;


// function displayList(items, wrapper, rows_per_page, page) {
//     wrapper.innerHTML = "";
//     page--;

//     let loop_start = rows_per_page * page;
//     let paginatedItems = items.slice(loop_start, loop_start + rows_per_page)
//     console.log(paginatedItems)
// }

// displayList()