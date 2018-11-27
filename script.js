let numberOfSquares = 6;
let colors = generateRandomColor(numberOfSquares)
let squares = document.querySelectorAll(".square");
let pickedColor =  pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    this.classList.add("selected")
    hardBtn.classList.remove("selected")
    numberOfSquares = 3
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
for (let i = 0 ; i < squares.length ; i++){
    if(colors[i]) {
        squares[i].style.background = colors[i];
    } else {
        squares[i].style.display = "none";
    }
    
}
messageDisplay.textContent = "";
})

hardBtn.addEventListener("click", function() {
    this.classList.add("selected")
    easyBtn.classList.remove("selected")
    numberOfSquares = 6
    colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0 ; i < squares.length ; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
    messageDisplay.textContent = "";
})

resetButton.addEventListener("click", function() {
   //generate all new colors
   colors = generateRandomColor(numberOfSquares);
   //pick new colors from array
   pickedColor = pickColor();
   //change color display to match pick color;
   colorDisplay.textContent = pickedColor;
   //change colors of square
   for(let i = 0; i < squares.length ; i++ ) {
       squares[i].style.background = colors[i];
   }
   //change resetButton back to new colors
   resetButton.textContent = "New Colors"
   //change h1 back to original color
   h1.style.background =  "steelblue";
   messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for (let i = 0 ; i < squares.length; i++){
    //add initial colors of square
    squares[i].style.background = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click" , function() {
    
    //grab color of picked color
    let clickedColor = this.style.background;
  
    //compare color to to picked color 
    if (clickedColor === pickedColor) {
        h1.style.background = clickedColor;
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent = 'Play Again?'
    } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again"
    }
    });
};

function changeColors(color) {
    //loop through all square
    for (let i = 0 ; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor() {
   let random =  Math.floor( Math.random() * colors.length );
   return colors[random];
}

function generateRandomColor(num) {
    //make an array
    let arr = [];

    // repeat num times
    for (let i = 0 ; i < num ; i++){
        //get random color and push to array
        arr.push(randomColor())
    }

    //return array
    return arr;

}

function randomColor(){
    //pick a red form 0 to 255
    let r = Math.floor( Math.random() * 256 ) ;
    //pick a green form 0 to 255
    let g = Math.floor( Math.random() * 256 ) ;
    //pick a blue form 0 to 255
    let b = Math.floor( Math.random() * 256 ) ;

    return `rgb(${r}, ${g}, ${b})`
}