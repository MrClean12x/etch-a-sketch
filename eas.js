let color = "black"
let click = true

function createGrid(size) {
    let grid = document.querySelector(".grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function changeSize(input) {
    
      if (input >= 2 && input <= 100){
        createGrid(input);
      }   else {
        //console.log("too small or too large, between 2 and 100 only")
      }
    
}


function colorSquare() {
    if (click) {
    if ((color == "random")) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
}
}

function changeColor(choice){
    color = choice;
}

function resetGrid() {
    let grid = document.querySelector(".grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != "BUTTON"){
    click = !click;
    if (click){
        document.querySelector(".mode").textContent = "Mode: Drawing";
    } else {
        document.querySelector(".mode").textContent = "Mode: Not Drawing";
    }
}
});