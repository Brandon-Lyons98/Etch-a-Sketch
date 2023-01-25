const container = document.querySelector('#container');

function makeSquareBoxes() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', () => {
        let a = randomizeBoxColor();
        let b = randomizeBoxColor();
        let c = randomizeBoxColor();
        
        box.style.backgroundColor = 'black';
        //box.style.backgroundColor = "rgb("+ a +","+ b +","+ c +")";
    });

    container.appendChild(box);
}

for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
        makeSquareBoxes();
    }
}

function randomizeBoxColor() {
    return Math.floor(Math.random() * 256);
}