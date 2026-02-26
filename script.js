const sketchDiv = document.querySelector(".sketchDiv");
const containerSize = 800;
sketchDiv.style.width = containerSize.toString() + "px";

let divArray = [];
let gridSize = 10;

function newGrid(){
    for(i = 0; i < gridSize; i++){
    divArray[i] = [];
    let cellSize = containerSize / gridSize;

    for(j = 0; j < gridSize; j++){
        divArray[i].push(document.createElement("div"));
        sketchDiv.appendChild(divArray[i][j]);
        divArray[i][j].style.width = cellSize.toString() + "px";
        divArray[i][j].style.height = cellSize.toString() + "px";
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
   
   if(gridSize < 4 || gridSize > 100 || isNaN(gridSize)){
        alert("Invalid input. Defaulting to 10.");
        gridSize = 10;
   }
    
    
    console.log(gridSize);
    //console.log(typeof +gridSize == "number");
}

function newSketch(){
    deleteGrid();
    setGridSize();
    newGrid();
}

// function set random color
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

randomColor();

sketchDiv.addEventListener("mouseover", (e) => {
    if(e.target.style.backgroundColor == ""){
        e.target.style.backgroundColor = randomColor();
    }
    if(e.target.style.opacity < 1){
        let currentOpacity = +e.target.style.opacity;
        currentOpacity += 0.25;
        e.target.style.opacity = currentOpacity;
    }
    // if opacity = 1, add target to progress array if not already in there
    // if progress array = 

    // check fill progress
    let opacityCheck = 0;
    for(i = 0; i < gridSize; i++){
        for(j = 0; j < gridSize; j++)
            if(divArray[i][j].style.opacity == 1){
                opacityCheck += 1;
            }
    }
    if(opacityCheck == (gridSize * gridSize)){
        alert("Complete!");
    }
})

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (e) => {
    newSketch();
});
