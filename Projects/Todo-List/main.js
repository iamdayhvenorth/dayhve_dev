let stock = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

// const random = Math.floor(Math.random() * (stock.Fruits.length))



// let order = (Fruit_name, call_production) => {

//     setTimeout(() => {

//         console.log(`${stock.Fruits[Fruit_name]} was selected`)
//         call_production()

//         setTimeout(() => {
//             console.log("The fruits has been chopped");

//             setTimeout(() => {
//                 console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log("the machine has started");

//                     setTimeout(() => {
//                         console.log(`ice-cream was placed ${stock.Holder[0]}`);

//                         setTimeout(() => {
//                             console.log(`${stock.Toppings[0]} was added as toppings`);

//                             setTimeout(() => {
//                                 console.log("serve ice-cream")
//                             }, 2000)
//                         }, 3000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 2000)

// };


// let production = () => {

//     setTimeout(() => {
//         console.log("production has started")
//     }, 0000)

// };

// order("0", production)

let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject(console.log("our shop is closed"))
//         }
//     });
// };


// order(2000, () => console.log(`${stock.Fruits[0]} was selected`))

//     .then(() => {
//         return order(1000, () => console.log('production has started'))
//     })
//     .then(() => {
//         return order(2000, () => console.log("The fruit was chopped"))
//     })
//     .then(() => {
//         return order(1000, () => {
//             console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was added`)
//         })
//     })
//     .then(() => {
//         return order(1000, () => console.log("The machine has started"))
//     })

//     .then(() => {
//         return order(2000, () => {
//             console.log(`ice-cream was placed on ${stock.Holder[0]}`)
//         })
//     })

//     .then(() => {
//         return order(3000, () => {
//             console.log(`${stock.Toppings[0]} was added as toppings`)
//         })
//     })

//     .then(() => {
//         return order(2000, () => console.log("serve ice-cream"))
//     })

//     .catch(() => console.log("customer left"))

//     .finally(() => console.log("day ended, shop is now closed"))


const time = (ms) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log(""))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stock.Fruits[0]} was selected`)

        await time(0000)
        console.log("start production")

        await time(2000)
        console.log(`the fruit was chopped`)

        await time(1000)
        console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was added`)

        await time(1000)
        console.log("The machine has started")

        await time(2000)
        console.log(`ice-cream was placed on ${stock.Holder[0]}`)

        await time(3000)
        console.log(`${stock.Toppings[0]} was added as toppings`)

        await time(2000)
        console.log("serve ice-cream")
    }
    catch (error) {
        console.log("customer left", error)
    }
    finally {
        console.log("day has ended, shop closed")
    }
}

// kitchen()


const input = document.getElementById("input");
const todoBtn = document.getElementById("todo-btn");
const ul = document.getElementById("todo-list");
const myList = document.getElementsByTagName("LI");



// adding close button to each list item
let i;
for (i = 0; i < myList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "span"
    span.appendChild(txt)
    myList[i].appendChild(span)
}


const closeBtn = document.getElementsByClassName("span")

for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        const liCont = this.parentElement
        liCont.style.display = "none"
    }
}


// add func to the add todo button
todoBtn.onclick = () => {
    const li = document.createElement("li");
    const text = document.createTextNode(input.value);
    li.appendChild(text)


    if (input.value === "") {
        return
    } else {
        ul.appendChild(li);
    }

    input.value = ""

    for (i = 0; i < myList.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "span"
        span.appendChild(txt)
        myList[i].appendChild(span)
    }


    for (i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function () {
            const liCont = this.parentElement
            liCont.style.display = "none"
        }
    }

}







const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass")
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener("submit", validate)


