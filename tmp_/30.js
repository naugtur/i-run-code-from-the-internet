module.exports.dadJoke = async () => {
    const joke = await fetch('https://icanhazdadjoke.com/slack');
    const jokeJson = await joke.json();
    return jokeJson.attachments[0].text;
}
    