const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

ctx.font = '30px Impact';
ctx.rotate(0.1);
ctx.fillText(`Awesome!`, 50, 100);


console.log(`<img src="${canvas.toDataURL()}" />`);