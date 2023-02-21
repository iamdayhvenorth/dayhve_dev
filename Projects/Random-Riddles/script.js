const btnEl = document.getElementById("btn");
const questionEl = document.getElementById("riddle-ques");
const answerEl = document.getElementById("answer");
const apiKey = "myUmw18MSiuO9xfcyGbxng==w3nKdLy3PAyjsfmn";
const apiURL = "https://api.api-ninjas.com/v1/riddles";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const spanEl = document.querySelector(".active")
btnEl.addEventListener("click", async () => {

    try {
        questionEl.innerText = "Loading Riddle......";
        answerEl.innerText = "";
        btnEl.disabled = true;
        btnEl.innerText = "Loading Riddle...."
        const reponse = await fetch(apiURL, options)
        const data = await reponse.json()
        questionEl.innerText = data[0].question;

        answerEl.innerText = "Think for 10 seconds";
        btnEl.innerText = "Loading Answer...."
        setTimeout(() => {
            answerEl.innerText = data[0].answer;
            btnEl.disabled = false;
            btnEl.innerText = "get random riddle"
        }, 10000)

    } catch (error) {
        questionEl.innerText = "Loading Riddle......";
        questionEl.innerText = "Oops an error occurred, try again later!";
        btnEl.innerText = "get random riddles"
    }

})