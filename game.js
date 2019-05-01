function create2dArray(cols, rows) {
    let array = new Array(cols);

    for(let i = 0; i< rows; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

function setup() {
    let grid = create2dArray(10, 10);

    for(let i=0;i<10;i++) {
        for(j=0;j<10;j++) {
            grid[i][j] = floor(random(2));
        }
    }
    console.log(grid);
}