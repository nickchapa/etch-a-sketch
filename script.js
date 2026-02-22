const sketchDiv = document.querySelector(".sketchDiv");

// for loop to create multiple divs
// create an array of divs?
let divArray = [];
divArray.push(document.createElement("div"));
divArray[0].textContent = "This div is in an array.";
sketchDiv.appendChild(divArray[0]);

for(i = 0; i < 16; i++){
    divArray.push(document.createElement("div"));
    divArray[i].textContent = `This is div ${i}`;
    sketchDiv.appendChild(divArray[i]);
    console.log(i);
}