const body = document.querySelector("body");
const sketchDiv = document.querySelector(".sketchDiv");
const containerSize = 800;
sketchDiv.style.width = containerSize.toString() + "px";
const progressDiv = document.querySelector(".progress");

const difficultyDiv = document.getElementById("difficultyDiv");
const difficultyBtns = document.querySelectorAll(".difficultyBtn");

const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");

easyBtn.style.backgroundColor = "green";

const secretBtn = document.createElement("button");
secretBtn.setAttribute("id", "secretBtn");
secretBtn.textContent = "secret";

let divArray = [];
let gridSize = 10;
let fullGridSize = gridSize * gridSize;
let progressValue = 0;
let inputType = "click";
let difficultyValue = 1;
let isComplete = false;
let isDifficultyEnabled = true;

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

    progressDiv.textContent = `Completion: 0 / ${gridSize * gridSize}`;
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
    let gridsizeInput = document.getElementById("gridsize-input");

    gridSize = gridsizeInput.value;
   
   if(gridSize < 4 || gridSize > 100 || isNaN(gridSize)){
        alert("Invalid input. Defaulting to 10.");
        gridSize = 10;
   }
    
    fullGridSize = gridSize * gridSize;
    console.log(`fullGridSize: ${fullGridSize}`);
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

function eventTriggered(e){
    if(e.target.style.backgroundColor == ""){
        e.target.style.backgroundColor = randomColor();
    }
    if(e.target.style.opacity < 1){
        let currentOpacity = +e.target.style.opacity;
        currentOpacity += difficultyValue;
        if (currentOpacity > 1){
            currentOpacity = 1;
        }
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
                divArray[i][j].style.border = "solid 2px black";
            }
    }

    if(opacityCheck != progressValue){
        progressValue = opacityCheck;
        progressDiv.textContent = `Completion: ${progressValue} / ${fullGridSize}`;
    }

    let completionPercent = Math.round((progressValue / fullGridSize) * 100) + "%";

    progressDiv.style.background = `linear-gradient(to right, green ${completionPercent}, white ${completionPercent})`;

    if(!isComplete){
        if(progressValue == (fullGridSize)){
            body.append(secretBtn);
            isComplete = true;
        }
    }

    if(isDifficultyEnabled){
        difficultyBtns.forEach(element => element.disabled = true);
    }
}

sketchDiv.addEventListener("mouseover", (e) => {
    if(inputType == "mouseover"){
        eventTriggered(e);
    }
    if(inputType == "click"){
        e.target.style.opacity = 1;
    }
    e.target.style.border = "solid 2px red";
})

sketchDiv.addEventListener("mouseout", (e) => {
    if(inputType == "mouseover"){
        if(e.target.style.opacity == 1){
            e.target.style.border = "solid 2px black";
        }else e.target.style.border = "none";
    }

    if(inputType == "click"){
        if(e.target.style.backgroundColor == ""){
            e.target.style.border = "none";
            e.target.style.opacity = 0;
        } else e.target.style.border = "solid 2px black";
    }
})

sketchDiv.addEventListener("click", (e) => {
    if(inputType == "click" && e.target.style.backgroundColor == ""){
        eventTriggered(e);
    }else e.target.style.backgroundColor = "";
})

const inputTypeBtn = document.querySelector(".inputTypeBtn");

inputTypeBtn.addEventListener("click", (e) => {
    if(inputType == "mouseover"){
        inputType = "click";
        inputTypeBtn.textContent = "Switch to Hover";
        difficultyBtns.forEach(element => element.disabled = true);
        isDifficultyEnabled = false;
    }
    else if(inputType == "click"){
        inputType = "mouseover";
        inputTypeBtn.textContent = "Switch to Click";
    }
})

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (e) => {
    isComplete = false;
    newSketch();
    difficultyBtns.forEach(element => element.disabled = false);
    secretBtn.remove();
});


difficultyDiv.addEventListener("click", (e) => {
    if(e.target == easyBtn){
        difficultyValue = 1;
        easyBtn.style.backgroundColor = "green";
        mediumBtn.style.backgroundColor = "";
        hardBtn.style.backgroundColor = "";
    }
    if(e.target == mediumBtn){
        difficultyValue = 0.5;
        easyBtn.style.backgroundColor = "";
        mediumBtn.style.backgroundColor = "yellow";
        hardBtn.style.backgroundColor = "";
    }
    if(e.target == hardBtn){
        difficultyValue = 0.25;
        easyBtn.style.backgroundColor = "";
        mediumBtn.style.backgroundColor = "";
        hardBtn.style.backgroundColor = "red";
    }
})

secretBtn.addEventListener("click", (e) => {
alert("secret activated!");
})