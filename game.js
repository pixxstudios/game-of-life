function create2dArray(cols, rows) {
    let array = new Array(cols);

    for(let i = 0; i< rows; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

let grid;
let cols;
let rows;
let resolution = 20;

function setup() {
    createCanvas(400, 400);

    cols = width/resolution;
    rows = height/resolution;

    grid = create2dArray(cols, rows);

    for(let i=0;i<cols;i++) {
        for(let j=0;j<rows;j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(0);
    for(let i=0;i<cols;i++) {
        for(j=0;j<rows;j++) {
             let x = i * resolution;
             let y = j * resolution;

             if(grid[i][j] === 1) {
                 fill(255);
                rect(x, y, resolution, resolution);
             }
        }
    }
}