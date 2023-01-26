const grid = document.querySelector('.grid');
const body = document.querySelector('body');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomizeBoxColor() {
    return Math.floor(Math.random() * 256);
}

const slider = document.querySelector('#slider');
const screenValue = document.querySelector('.value');
slider.addEventListener('input', () => {
    let value = document.getElementById('slider').value;
    screenValue.textContent = value;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
    for (let i = 0; i < value * value; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let value = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

const rgb = document.querySelector('#rainbow');
rgb.addEventListener('click', () => {
    let value = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            let a = randomizeBoxColor();
            let b = randomizeBoxColor();
            let c = randomizeBoxColor();
            event.target.style.backgroundColor = "rgb("+ a +","+ b +","+ c +")";
        });
    }
});

const black = document.querySelector('#black');
black.addEventListener('click', () => {
    let value = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        });
    }
});

const colorWheel = document.querySelector('#color');
colorWheel.addEventListener('input', () => {
    let value = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < value * value; i++) {
        cell[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = newColor;
        });
    }
});

/*
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


*/


createGrid();