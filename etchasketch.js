let etch = document.querySelector('.etch');
let clearbtn = document.querySelector('.clear-btn');
let resizebtn = document.querySelector('.resize-btn');

let squares = 16;
let size = 960/(squares*4);
let padding = size.toString()+'px';
etch.style.gridTemplateColumns = 'repeat('+squares.toString()+', auto)';
createSketch();

resizebtn.addEventListener('click', e => {
    deleteSketch();

    squares = prompt('How many squares?', '16');
    squares = parseInt(squares, 10);

    size = 960/(squares*4);
    padding = size.toString()+'px';
    etch.style.gridTemplateColumns = 'repeat('+squares.toString()+', auto)';
    createSketch();
});

clearbtn.addEventListener('click', e => {
    deleteSketch();
    createSketch();
})

function createSketch() {
    for (let i = 0; i < squares * squares; i++) {
        let div = document.createElement('div');
        div.style.padding = padding;
        div.className = 'etch-item';
        div.addEventListener('mouseenter', e => {div.style.backgroundColor = 'black';});
        
        etch.appendChild(div);
    }
}

function deleteSketch() {
    for (let i = 0; i < squares * squares; i++) {
        let div = etch.lastChild;
        etch.removeChild(div);
    }
}