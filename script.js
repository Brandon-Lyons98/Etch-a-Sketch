const container = document.querySelector('#container');
const clear = document.querySelector('#button');

function makeSquareBoxes() {
    const boxes = document.createElement('div');
    boxes.classList.add('box');
    boxes.addEventListener('mouseover', () => {
        let a = randomizeBoxColor();
        let b = randomizeBoxColor();
        let c = randomizeBoxColor();
        
        boxes.style.backgroundColor = 'black';
        //boxes.style.backgroundColor = "rgb("+ a +","+ b +","+ c +")";
    });

    clear.addEventListener('click', () => {
        boxes.style.backgroundColor = 'white';
    });
    
    container.appendChild(boxes);
}

for (let i = 0; i <= 15; i++) {
    for (let j = 0; j <= 15; j++) {
        makeSquareBoxes();
    }
}

function randomizeBoxColor() {
    return Math.floor(Math.random() * 256);
}
