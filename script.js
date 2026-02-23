const sketchDiv = document.querySelector(".sketchDiv");

// for loop to create multiple divs
// create an array of divs?
let divArray = [];
const gridSize = 16;

for(i = 0; i < gridSize; i++){
    divArray[i] = [];
    //console.log(divArray);

    for(j = 0; j < gridSize; j++){
        divArray[i].push(document.createElement("div"));
        sketchDiv.appendChild(divArray[i][j]);
    }
}

// next step: change color on mouse hover
sketchDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
})

// for part 4
// calculate sketchDiv CSS width and height based on gridSize