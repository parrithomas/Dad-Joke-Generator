// define DOM elements
const container = document.querySelector('.container');
const dadJokeContainer = document.querySelector('.dad-joke-container');
const dadJoke = document.querySelector('.dad-joke');
const facePalmGif = document.querySelector('.facePalmGif');
const button = document.querySelector('.getJokeBtn');

// APIs

const getDadJoke = async () => {
    let config = { headers: { Accept: "application/json" } }
    let res = await axios.get('http://icanhazdadjoke.com', config)
    return res.data.joke

}

const getFacepalmGif = async () => {
    let res = await axios.get('http://api.giphy.com/v1/gifs/search?api_key=nZxVlJTxsrTKXe5Cqge9Elh0lpSnknEx&q=facepalm&limit=50')
    let rand = Math.floor(Math.random() * 50); // create a random number 1-25
    return res.data.data[rand].images.original.url

}

const dadMe = async () => {
    try {
        const jokeText = await getDadJoke();
        const gifURL = await getFacepalmGif();
        facePalmGif.src = gifURL;
        dadJoke.innerText = jokeText;
    }
    catch (e) {
        dadJoke.Joke.innertext = 'Sorry. The jokes are so bad they failed.'
    }
}
dadMe();
button.addEventListener('click', dadMe);