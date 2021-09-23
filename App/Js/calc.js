
window.onload = function () {
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let counter = document.getElementById('counter');
    let count = 1;

    if (minus) {
        minus.addEventListener('click', () => {
            count--;
            counter.innerHTML = count;
            count = count < 1 ? 1 : count;
        })
    }


    if (plus) {
        plus.addEventListener('click', () => {
            count++;
            counter.innerHTML = count;
        })
    }
}

