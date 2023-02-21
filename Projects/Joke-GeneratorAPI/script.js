const btnEL = document.getElementById("btn")
const apiKey = "myUmw18MSiuO9xfcyGbxng==w3nKdLy3PAyjsfmn"
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const jokeEL = document.getElementById("joke")
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

async function getJokes() {

    try {
        jokeEL.innerText = "Updating..."
        btnEL.disabled = true
        btnEL.innerText = "Loading....."
        const reponse = await fetch(apiURL, options)
        const data = await reponse.json()
        jokeEL.innerText = data[0].joke
        btnEL.disabled = false
        btnEL.innerText = "tell me a joke"
    } catch (error) {
        console.log(error)
        jokeEL.innerText = " An error occurred please try again later"
        btnEL.innerText = "tell me a joke"
    }

}

getJokes()
btnEL.addEventListener("click", getJokes)





