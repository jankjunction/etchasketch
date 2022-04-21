//

let userGridNumber = 100;
const gridContainer = document.querySelector('#gridContainer');

function createGrid (gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.classList.add('hover');
        div.classList.toggle('hover');
        gridContainer.appendChild(div);
    }
}

createGrid(userGridNumber);
