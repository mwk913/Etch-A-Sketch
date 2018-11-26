addDivGrid(25)
changeColorEventListener()
//DEFAULT GRID SIZE
function addDivGrid(gridSize) { 
    for(i=0; i < gridSize*gridSize ; i++) {
        let newDiv = document.createElement("div"); 
        newDiv.classList.add("gridBlock");
        let containerDiv = document.getElementById("container"); 
        containerDiv.append(newDiv);
    }
  }
//THIS IS USED TO ASK USER FOR GRID SIZE
function getUserGrid() {
    let userGridSize = prompt("Enter grid size");
    resetGrid();
    addDivGrid(userGridSize);
    changeColorEventListener();
    if (userGridSize > 0 && userGridSize <= 60){
        let divWidth = document.querySelectorAll('.gridBlock');
        divWidth.forEach((grid) => {
            grid.style.width = Math.floor((500 / (userGridSize)) * 10) / 10 + 'px';
            grid.style.height = Math.floor((500 / (userGridSize)) * 10) / 10 + 'px';       
        });
    }else if (userGridSize == undefined) {
        addDivGrid(25);
        changeColorEventListener();
    }
    else {
        resetGrid();
        addDivGrid(25);
        changeColorEventListerner();
        alert('Enter a number less than 61');
    }
  }
//THIS IS USED TO CHANGE COLOR OF DIV BEING HOVERED
function changeDivColor(e) {
    let hoverColor = e.target.style;
    hoverColor.backgroundColor = '#FF6462';
  }
//EVENT LISTENER FOR HOVER EFFECTS FOR GRID
function changeColorEventListener() {
    let coloredDiv= document.querySelectorAll(".gridBlock");
    coloredDiv.forEach((e) => {
        e.addEventListener("mouseover", changeDivColor)
    }
)}
//RESETS THE GRID
function resetGrid(){
    let resetDiv = document.querySelectorAll('.gridBlock');
    resetDiv.forEach((block) => {
        let removeDiv = document.querySelector('.gridBlock');
        block.parentNode.removeChild(removeDiv);
    }
)}
