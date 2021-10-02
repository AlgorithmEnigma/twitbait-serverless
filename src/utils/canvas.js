const { createCanvas, loadImage } = require("canvas");

function newCanvas(width, height) {
    const canvas = createCanvas(width, height);
    return canvas;
}

function getCtxFromCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    return ctx;
}
// ctx.font = "30px Impact";
// ctx.rotate(0.1);
// ctx.fillText(`Awesome!`, 50, 100);

// console.log(`<img src="${canvas.toDataURL()}" />`);

module.exports = {
    newCanvas,
    getCtxFromCanvas,
};
