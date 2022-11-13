
// create vars that contain the body, the maindiv and the button
const mainBody = document.querySelector('body');
const mainGrid = document.createElement('grid');
const button1 = document.createElement('button');

// add the mainDiv inside the body
mainBody.appendChild(mainGrid);

// style the mainGrid
mainGrid.style.textAlign = 'center';
mainGrid.style.width = '960px';
mainGrid.style.height = '960px';
mainGrid.style.display = 'grid';

// create var to hold the value of columns

let squareCount = 4;
mainGrid.style.gridTemplateColumns = `repeat(${squareCount}, auto)`;
mainGrid.style.gridTemplateRows = `repeat(${squareCount}, auto)`;

// create the cells, add style, addeventlistener, and append to mainDiv
let i = 0; 

while (i < Math.pow(squareCount, 2)){
const cell = document.createElement('div');
cell.classList.add('cellDivs');
cell.innerHTML = ''; 
cell.style.border = "solid black";
cell.addEventListener("mouseover", hovering);
cell.addEventListener("mouseleave", noHovering);
mainGrid.appendChild(cell);

i++ 
}

// the hovering functions to change color of cells
function noHovering(){
    this.style.backgroundColor= 'blue';
}

function hovering(){
    this.style.backgroundColor = 'red'; 
}


// append button to mainBody and set its function and attributes
mainBody.insertBefore(button1, mainBody.firstElementChild);
button1.textContent ='how many squares';



button1.addEventListener('click', () =>{
    let squareCount = prompt('tell me the amount of squares that you want');
    let squareCountInt = parseInt(squareCount);
    let boxes = document.querySelectorAll('.cellDivs');
    boxes.forEach(box => {
        box.remove();
    });

    if (squareCountInt <= 100){
    

    mainGrid.style.gridTemplateColumns = `repeat(${squareCountInt}, auto)`;


    let i = 0; 

    while (i < Math.pow(squareCount, 2)){
    const cell = document.createElement('div');
    cell.classList.add('cellDivs');
    cell.innerHTML = ''; 
    cell.style.border = "solid black";
    cell.addEventListener("mouseover", hovering);
    cell.addEventListener("mouseleave", noHovering);
    mainGrid.appendChild(cell);

    i++ 
    }
    }
})






