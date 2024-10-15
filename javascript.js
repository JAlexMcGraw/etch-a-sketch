const grid = document.querySelector("#grid");
const container = document.querySelector("#container");

container.style.display = 'flex';
container.style.flexDirection = 'column';

grid.style.display = 'flex';
grid.style.justifyContent = 'center';
grid.style.width = '800px';
grid.style.height='800px';
grid.style.flexWrap = 'wrap';
grid.style.margin = 'auto';

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGridSize(sideSize) {
    grid.innerHTML = "";
    grid.style.flexDirection = 'row';
    for (let i = 0; i < sideSize; i++) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.width = "100%";
        row.style.height = `${100/sideSize}%`

        for (j = 0; j < sideSize; j++) {
            let column = document.createElement("div");
            column.classList.add("box");
            column.style.flex = "1 1 0";
            column.style.border = "1px solid blue";

            row.appendChild(column);
        }
        row.addEventListener(
            "mouseover",
            (event) => {
                let red = randomNumber(0, 255);
                let green = randomNumber(0, 255);
                let blue = randomNumber(0, 255);
                event.target.style.background = `rgb(${red}, ${green}, ${blue})`;

                setTimeout(() => {
                    event.target.style.background = "";
                }, 300);
            },
            false,
        );
        grid.appendChild(row);
    }
}

let button = document.createElement("button");
button.style.border = "2px solid red";
button.style.background = "pink";
button.style.height = "50px";
button.style.width = "300px";
button.style.alignSelf = "center";
button.style.flex = "1 0 auto";
button.style.alignItems = "center";
button.style.justifyContent = "center";

button.textContent = "Set Grid Size";


button.addEventListener(
    "click",
    function () {
        // console.log(`size pre prompt ${size}`)
        size = parseInt(prompt("Pick a number <= 100"), 10);

        console.log(`size post prompt ${size}`)

        console.log(`size type: ${typeof size}`)
        if (isNaN(size)) {
            alert("Must enter a number");
        } else if (size > 100) {
            alert("Must be smaller than 100");
        } 
        console.log(`number: ${size}`)
        setGridSize(size);
    }
)
container.insertBefore(button, grid);