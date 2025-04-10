function creategrid(size){
    let etch_screen = document.querySelector(".screen");
    for (let i = 0; i < size; i++) {
        var column  = document.createElement("div");
        column.className = "column"; 
        console.log(i)
        for (let j = 0; j < size ; j++) {
            var row  = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        etch_screen.appendChild(column); 
    }

}

creategrid(16)


// for (let i = 0; i < 257; i++) {
//     var column  = document.createElement("div");
//     var row  = document.createElement("div");
//     row.className = "row";
//     document.getElementById("container").appendChild(row);  
// }


