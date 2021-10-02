const tinycolor = require("tinycolor2");
const tinygradient = require("tinygradient");

function createRgbGradient(arrColors, steps) {
    let gradient = tinygradient(arrColors);
    let colors = gradient.rgb(steps);
    const array = [];
    colors.forEach((obj) => {
        let color = tinycolor(obj._originalInput).toHex();
        array.push(color);
    });
    return array;
}

function newLinearGradient(ctx, gradientArray, width, height) {
    let linearGradient = ctx.createLinearGradient(0, 0, width, height);
    let i = 0.0;
    gradientArray.forEach((obj) => {
        linearGradient.addColorStop(i, `#${obj}`);
        // console.log(obj);
        i += 0.1;
    });
    return linearGradient;
}

module.exports = { createRgbGradient, newLinearGradient };
