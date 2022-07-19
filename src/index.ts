import tinygradient from 'tinygradient';
import fs from 'fs';

let gradient = tinygradient('pink', 'green', 'blue');
// console.log(gradient);
let colorsRgb = gradient.rgb(12);
// console.log(colorsRgb);
gradient = tinygradient(colorsRgb);
let gradientCSS = gradient.css();
console.log(gradientCSS);

function changeGradient(gradient: string) {
    let index = `body {
        background: rgb(2, 0, 45);
        background: ${gradient}
    }`;

    fs.writeFile('src/index.css', index, 'utf-8', function (err) {
        if (err) throw err;
        console.log('css made');
    });
}

changeGradient(gradientCSS);
