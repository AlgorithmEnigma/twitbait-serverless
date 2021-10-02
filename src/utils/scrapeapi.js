const axios = require("axios");
const cheerio = require("cheerio");

async function fetchTitle(url) {
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const text = $("h1").text();
    // console.log(text);
    return text;
}

module.exports = { fetchTitle };
