const { dadJoke } = require("@_evil/package");

const uploadJoke = async (joke) => {
  const fetchOptions = {
    method: "POST",
    body: joke,
    headers: {
      Authorization: `Bearer ${process.env.PRECIOUS_SECRET}`,
    },
  };

  console.log("uploading to a protected location.", fetchOptions);
  return fetch("http://localhost:8080/", fetchOptions);
};

async function run() {
  const joke = await dadJoke();
  uploadJoke(joke);
}

run();
