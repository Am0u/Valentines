const noButton = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');


const OFFSET = 100;

yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: {}
    });

    setTimeout(() => {
        window.location.href = 'newpage.html'; // Replace with the path to your new page
    }, 2000);
});
noButton.addEventListener("click", e => {
    alert("U got me :(");
    window.close();
})

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const buttonBox = noButton.getBoundingClientRect();

    const horDistance = distanceFromCenter(buttonBox.x, mouseX, buttonBox.width);
    const verDistance = distanceFromCenter(buttonBox.y, mouseY, buttonBox.height);

    const horOffset = buttonBox.width / 2 + OFFSET;
    const verOffset = buttonBox.height / 2 + OFFSET;

    if (Math.abs(horDistance) <= horOffset && Math.abs(verDistance) <= verOffset) {
        const newLeft = buttonBox.x + (horOffset / horDistance) * 10;
        const newTop = buttonBox.y + (verOffset / verDistance) * 10;

        setButtonPosition(newLeft, newTop);
    }
});

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = noButton.getBoundingClientRect();

    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + buttonBox.width > windowBox.width) left = windowBox.width - buttonBox.width;
    if (top + buttonBox.height > windowBox.height) top = windowBox.height - buttonBox.height;

    noButton.style.left = `${left}px`;
    noButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPos, mousePos, boxSize) {
    const boxCenter = boxPos + boxSize / 2;
    return boxCenter - mousePos;
}