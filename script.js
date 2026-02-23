const sketchDiv = document.querySelector(".sketchDiv");

// for loop to create multiple divs
// create an array of divs?
let divArray = [];
const gridSize = 16;

function newGrid(){
    for(i = 0; i < gridSize; i++){
    divArray[i] = [];
    //console.log(divArray);

    for(j = 0; j < gridSize; j++){
        divArray[i].push(document.createElement("div"));
        sketchDiv.appendChild(divArray[i][j]);
        }
    }
}

newGrid();

// next step: change color on mouse hover
sketchDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
})

// for part 4
// calculate sketchDiv CSS width and height based on gridSize

// new grid button
// sends prompt for number of squares per side
// remove existing grid
// generate new grid in same container using user input number
// max of 100

/*
const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", (e) => {
    sketchDiv.remove(divArray);
    newGrid();
});
*/