const sketchDiv = document.querySelector(".sketchDiv");

let divArray = [];
let gridSize = 16;

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

function setGridSize(){
    gridSize = prompt("Input number for new grid size:");
   
   if(gridSize < 16 || gridSize > 100 || isNaN(gridSize)){
        alert("Invalid input. Defaulting to 16.");
        gridSize = 16;
   }
    
    
    console.log(gridSize);
    //console.log(typeof +gridSize == "number");
}

sketchDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
})

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (e) => {
    deleteGrid();
    setGridSize();
    newGrid();
});
