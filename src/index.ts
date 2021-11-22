const express = require('express');
const { createCanvas } = require('canvas');

// Load util functions
// const createRGBGradient = require('./utils/gradient.ts');

// Load config
const config = require('../config.json');

const app = express();

// Destructure config variables
const {
    port,
    height,
    width,
    colors,
}: { port: number; height: number; width: number; colors: string[] } = config;

// Create canvas and get context
let canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d'); // const canvas = createCanvas(width, height);
// const ctx = canvas.getContext('2d');

// const gradient = createRGBGradient;

// Get request
app.get('/', (req: any, res: any) => {
    // if (ctx !== undefined && ctx !== null) {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, width, height);

    res.send(`<img src="${canvas.toDataURL()}" />`);
});
// Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
