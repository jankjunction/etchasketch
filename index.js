//
let userGridNumber = 8;

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'gridContainer');
document.body.appendChild(gridContainer);

const resetButton = document.querySelector('#reset');
const deleteGridButton = document.querySelector('#delete');
//

function createGrid (gridNumber) {
    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.classList.add('hover');
        div.classList.toggle('hover');
        gridContainer.appendChild(div);
    }
    assignClasses();
    setStyle();
};

// Set Grid size
function setStyle () {
    gridContainer.style.gridTemplateColumns = `repeat(${userGridNumber}, 1fr)`;
};

function assignClasses () {
    const gridNodeList = document.querySelectorAll('.grid');
    for (let i = 0; i < gridNodeList.length; i++) {
        gridNodeList[i].addEventListener('mouseover', () => {
            gridNodeList[i].classList.toggle('hover');
        });
    };
};

// Delete the Grid
    resetButton.addEventListener('click', () => {
    let children = gridContainer.childNodes;
    for (i = children.length; i > 0; i--) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
});

// Reset the Grid
resetButton.addEventListener('click', () => {
    userGridNumber = parseInt(prompt('Please enter a new Grid Size'));
    createGrid(userGridNumber);
});

createGrid(userGridNumber);



