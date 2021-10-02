function wrapText(text, wordsPerLine = 4) {
    let line = "";
    let wrappedText = [];
    let words = text.split(" ");

    words.forEach((obj, i) => {
        if (i === 0) {
            line = `${obj}`;
        } else if (i % wordsPerLine !== 0) {
            line = `${line} ${obj}`;
        } else if (i % wordsPerLine === 0) {
            wrappedText.push(line);
            line = `${obj}`;
        }
    });
    wrappedText.push(line);
    return wrappedText;
}

function displayText(
    ctx,
    wrappedText,
    lineHeight = 150,
    font = "bold 45pt Sans Serif",
    textAlign = "center",
    color = "#fff"
) {
    ctx.font = font;
    ctx.textAlign = textAlign;
    ctx.fillStyle = color;
    wrappedText.forEach((obj) => {
        ctx.fillText(obj, 600, lineHeight);
        lineHeight += 100;
    });
}

module.exports = { wrapText, displayText };
