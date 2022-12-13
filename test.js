function sudoku(puzzle) {
    while (puzzle.flat().filter(p => p === 0).length > 0) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (puzzle[i][j] === 0) {
                    puzzle[i][j] = solveSpace(puzzle, i, j);
                }
            }
        }
    }

    return puzzle;

}

function solveSpace(puzzle, i, j) {
    let candidates = [1,2,3,4,5,6,7,8,9];

    for (let z = 0; z < 9; z++) {
        candidates = candidates.filter(num => num !== puzzle[z][j]);
        candidates = candidates.filter(num => num !== puzzle[i][z]);
    }

    const iMax = Math.ceil((i+1) / 3) * 3;
    const jMax = Math.ceil((j+1) / 3) * 3;
    for (let x = iMax - 3; x < iMax; x++) {
        for (let y = jMax - 3; y < jMax; y++) {
            candidates = candidates.filter(num => num !== puzzle[x][y]);
        }
    }

    return candidates.length === 1 ? candidates[0] : 0;

}

function printPuzzle(puzzle) {
    console.log("\n\n");
    for (let i = 0; i < puzzle.length; i++) {
        console.log(puzzle[i].toString())
    }
}

printPuzzle(sudoku([
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]));