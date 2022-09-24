const jokeBtn = document.querySelector("#jokeBtn");
const jokeEle = document.querySelector("#joke");

async function generateJoke() {
	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
    let Utterance = new SpeechSynthesisUtterance(joke.joke);
    speechSynthesis.speak(Utterance);
	jokeEle.textContent = joke.joke;
}

jokeBtn.addEventListener("click",generateJoke);