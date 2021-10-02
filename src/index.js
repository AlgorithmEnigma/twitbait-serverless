const express = require("express");
const app = express();
const port = 3000;
const { getCtxFromCanvas, newCanvas } = require("./utils/canvas.js");
const { createRgbGradient, newLinearGradient } = require("./utils/gradient.js");
const { wrapText, displayText } = require("./utils/text.js");
const { fetchTitle } = require("./utils/scrapeapi.js");

const testColors = ["#c0edb3", "#b2a808", "#dca7b2", "#06c3e7"]; //A test array of colors.

const gradient = createRgbGradient(testColors, 9); // Creates an array of hex values with requested amount of steps.

const width = 1200; //Set the width of the canvas.
const height = 600; //Set the height of the canvas.

const canvas = newCanvas(width, height); // Creates the canvas.
const ctx = getCtxFromCanvas(canvas); // Gets the canvas context.

const linearGradient = newLinearGradient(ctx, gradient, width, height); // Generates the linearGradient from a gradient array.

//Draw the gradient.
app.get("/", (reg, res) => {
    ctx.fillStyle = linearGradient;
    ctx.fillRect(0, 0, width, height);

    fetchTitle(
        "https://codehandbook.org/how-to-return-data-from-javascript-promise-es6/#:~:text=Now%20you%20are%20able%20to%20return%20data%20from,above%20code%20in%20synchronous%20manner%20without%20any%20.then."
    ).then((response) => {
        const wrappedText = wrapText(response);
        displayText(ctx, wrappedText);
        res.send(`<img src="${canvas.toDataURL()}" />`);
    });
});

//Listen to port.
app.listen(port, () => {
    console.log(`Example App listening at http://localhost:${port}`);
});
