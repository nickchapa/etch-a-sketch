const sketchDiv = document.querySelector(".sketchDiv");

let divArray = [];
const gridSize = 16;

function newGrid(){
    for(i = 0; i < gridSize; i++){
    divArray[i] = [];

    for(j = 0; j < gridSize; j++){
        divArray[i].push(document.createElement("div"));
        sketchDiv.appendChild(divArray[i][j]);
        }
    }
}

newGrid();

function deleteGrid(){
    for(i = 0; i < gridSize; i++){
        for(j = 0; j < gridSize; j++){
            divArray[i][j].remove();
        }
    }
}

sketchDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
})

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (e) => {
    deleteGrid();
    newGrid();
});
