const noButton = document.getElementById('noBtn');
const OFFSET = 100;

noButton.addEventListener('click', () => {
    alert('Nice Try lol');
    window.close()
})
document.addEventListener('mousemove', (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const buttonBox = noButton.getBoundingClientRect();

    const horDistance = distanceFromCenter(buttonBox.x, mouseX, buttonBox.width);
    const verDistance = distanceFromCenter(buttonBox.y, mouseY, buttonBox.height);

    const horOffset = buttonBox.width / 2 + OFFSET;
    const verOffset = buttonBox.height / 2 + OFFSET;

    if(Math.abs(horDistance) <= horOffset && Math.abs(verDistance) <= verOffset) {
        setButtonPosition(
            buttonBox.x + horOffset/horDistance * 2,
            buttonBox.y + verOffset/verDistance * 2

        )
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = noButton.getBoundingClientRect();

    if (distanceFromCenter(left, windowBox.left, windowBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET;
    }
    if (distanceFromCenter(left, windowBox.right, windowBox.width) > 0) {
        left = windowBox.left + OFFSET;
    }

    noButton.style.left = `${left}px`;
    noButton.style.top = `${top}px`;

}


function distanceFromCenter(boxPos, mousePos, boxSize) {
    const boxCenter = boxPos + boxSize / 2;
    return Math.abs(boxCenter - mousePos);
}