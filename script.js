const container = document.querySelector("#container");

let gridSize = 16;

let cellSize = 960 / gridSize;

for (let i = 1; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = `width: ${cellSize}px; height:${cellSize}px; outline-style: solid; outline-color: gray; outline-width: thin;`;

    for (let j = 1; j < gridSize; j++) {
        let col = document.createElement('div');
        col.classList.add('col');
        col.style.cssText = `width: ${cellSize}px; height:${cellSize}px; outline-style: solid; outline-color: gray; outline-width: thin;`;
        container.appendChild(col);
    }
    container.appendChild(row);
    
}

