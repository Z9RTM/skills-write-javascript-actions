const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    json: true,
    headers: {
        "Accept": "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills course."
    }
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;