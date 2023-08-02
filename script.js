const container = document.querySelector("#container");


let gridSize = 16;

function generateGrid () {
    container.textContent = '';
    let cellSize = Math.floor(960 / gridSize);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.cssText = `width: ${cellSize}px; height:${cellSize}px; outline-style: solid; outline-color: gray; outline-width: thin;`;
            cell.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = getRandomColor();
            });

            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

generateGrid();

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}


    const changeGridSizeBtn = document.getElementById('gridButton');
    changeGridSizeBtn.addEventListener('click', function() {
        const msg = parseInt(prompt('Enter amount of grid squares (max 96)', '16'));
        console.log(isNaN(msg));
        if(!isNaN(msg)) {
            gridSize = Math.min(100, Math.max(1, parseInt(msg)));
            generateGrid();
        } else
            alert("Input error. Input only numerals");
    });
