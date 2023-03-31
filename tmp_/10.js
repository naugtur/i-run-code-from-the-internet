module.exports.dadJoke = async () => {
  const buff = Buffer.from(
    "VGhlIGJlc3QgdGhpbmcgYWJvdXQgYSBCb29sZWFuIGlzIGV2ZW4gaWYgeW91IGFyZSB3cm9uZywgeW91IGFyZSBvbmx5IG9mZiBieSBhIGJpdC4",
    "base64"
  );
  return buff.toString("ascii");
};
