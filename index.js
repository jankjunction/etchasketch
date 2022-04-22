//

let userGridNumber = 64;
const gridContainer = document.querySelector('#gridContainer');
const resetButton = document.querySelector('#reset');

// Set Grid size
gridContainer.style.gridTemplateColumns = `repeat(${Math.round(Math.sqrt(userGridNumber))}, 1fr)`;

// Reset the Grid



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

const gridNodeList = document.querySelectorAll('.grid');


for (let i = 0; i < gridNodeList.length; i++) {
    gridNodeList[i].addEventListener('mouseover', () => {
        gridNodeList[i].classList.toggle('hover');
    });
}


