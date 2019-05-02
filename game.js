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

    let next = create2dArray(cols, rows);

    for(let i=0; i<cols; i++) {
        for(let j=0; j<rows; j++) {
            let state = grid[i][j];

            let sum = 0;
            let neighbors = countneighbors(grid, i,j);

            if ( state == 0 && neighbors == 3) next[i][j] = 1;
            else if (state == 1 && (neighbors <2 || neighbors > 3)) next[i][j] = 0;
            else next[i][j] = state;
        }
    }

    grid = next;

    for(let i=0;i<cols;i++) {
        for(let j=0;j<rows;j++) {
             let x = i * resolution;
             let y = j * resolution;

             if(grid[i][j] === 1) {
                 fill(255);
                rect(x, y, resolution, resolution);
             }
        }
    }
}

function countneighbors(grid, x, y) {
    let sum = 0;
    for(let i=-1; i < 2; i++) {
        for(let j=-1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}