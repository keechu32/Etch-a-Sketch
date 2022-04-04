let color="black";
let board = document.querySelector('.board');
let draw=true;
//initialise the drawing

//Making the board
function makeGrid(size){
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    for(let i=0;i<(size*size);i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover",colorSquare);
        square.style.backgroundColor="white";
        board.insertAdjacentElement("beforeend",square);
    }
}
//With the user input
function changeSize(input){
    if(input>=2 && input<=100){
        resetGrid();
        makeGrid(input);
    }
    else{
        console.log("Invalid Grid size");
        alert("Please Enter valid Grid Size");
    }
}
makeGrid(16);
//Clearing the existing grid
function resetGrid(){
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor="white");
}

function colorSquare(){
    if(draw){
        document.querySelector('.mode').textContent=`The ${color} Pen is Active!`
        if(color==="Disco"){
            this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
            document.querySelector('body').style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
        }
        else{
            this.style.backgroundColor=color;
        }
    }
}
function colorChange(choice){
    color=choice;
}
document.querySelector("body").addEventListener("click",(e)=>{
    if(e.target.tagName !="BUTTON"){
        draw=!draw;
        if(!draw){
            document.querySelector('.mode').textContent="The Pen is Off, Click to turn on!";
        }
    }
});