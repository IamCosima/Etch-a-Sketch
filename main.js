function creategrid(size){
    document.querySelector(".screen").innerHTML = "";

    if (size >2 && size < 100){
    let screen = document.querySelector(".screen");
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid black";
        column.appendChild(row);
      }
      screen.appendChild(column);
    }
    draw()

    }else {
        size = 16;
        let screen = document.querySelector(".screen");
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "1px solid black";
        column.appendChild(row);
      }
      screen.appendChild(column);
    }
    draw()

    }
  }

function draw(){
    let row = document.getElementsByClassName("row");
    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener("mouseover",black );
        }
}

function resize(){
    creategrid(prompt("Choose Grid Size: " + "Make sure it's a number from 2 to 99!"))
}


function black() {
    this.style.backgroundColor = '#2e2b2b';
}

creategrid(16)
draw()

// for (let i = 0; i < 257; i++) {
//     var column  = document.createElement("div");
//     var row  = document.createElement("div");
//     row.className = "row";
//     document.getElementById("container").appendChild(row);  
// }


