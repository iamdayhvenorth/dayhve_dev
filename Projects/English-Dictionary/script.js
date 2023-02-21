const inputEl = document.getElementById("input");
const meaningContEl = document.getElementById("meaning-container");
const infoEl = document.getElementById("info");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio")

async function fetchAPI(word) {

    try {
        infoEl.style.display = "block"
        meaningContEl.style.display = "none"
        infoEl.innerText = `Searching the meaning of "${word}"`
        const url = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())

        if (result.title) {
            infoEl.style.display = "none"
            meaningContEl.style.display = "block"
            titleEl.innerText = word
            meaningEl.innerText = "N/A"
            audioEl.style.display = "none"
            inputEl.value = ""
        } else {
            infoEl.style.display = "none"
            meaningContEl.style.display = "block"
            audioEl.style.display = "inline-flex"
            titleEl.innerText = result[0].word
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition

            audioEl.src = result[0].phonetics[0].audio
            inputEl.value = ""
        }

    } catch (error) {
        infoEl.innerText = `An error occurred, try again later`
    }

}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
})