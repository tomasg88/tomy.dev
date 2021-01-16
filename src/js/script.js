const bigButtons = document.getElementsByClassName('big-button');

function calculateDepth(e, button) {
    /**
     * 0, 0 es el centro
     */
    const {offsetLeft, offsetTop, offsetHeight, offsetWidth} = e.target;
    var objCenterX = offsetLeft + offsetWidth / 2;
    var objCenterY = offsetTop + offsetHeight / 2;

    const x = (e.pageX - objCenterX);
    const y = (e.pageY - objCenterY);

    /**
     * LOGICA
     * se mantiene positivo cuando es positivo, pero se llama a la funcion opuesta.
     *  es decir, si me muevo horizontal, llamo a rotateY; si me muevo vertical llamo a rotateX
     */
    let rotateY = '', rotateX = '';
    if (x > 0) {
        rotateY = 'rotateY(10deg)'
        rotateX = y < 0? 'rotateX(10deg)' : 'rotateX(-10deg)';
    } else {
        rotateY = 'rotateY(-10deg)'
        rotateX = y < 0? 'rotateX(10deg)' : 'rotateX(-10deg)';
    }
    button.style.transform = `perspective(600px) ${rotateX} ${rotateY}`
}

function resetEffect(button) {
    button.style.transform = `perspective(600px) rotateX(0) rotateX(0)`
}

for (let i = 0; i < bigButtons.length; i++) {
    bigButtons[i].addEventListener('mouseover', (ev) => calculateDepth(ev, bigButtons[i]));
    bigButtons[i].addEventListener('mousemove', (ev) => calculateDepth(ev, bigButtons[i]));
    bigButtons[i].addEventListener('mouseout', (ev) => resetEffect(bigButtons[i]));
}




