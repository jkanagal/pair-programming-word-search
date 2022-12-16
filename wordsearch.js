// function to get vertical array elements from an array of arrays
const transpose = function (matrix) {
    let arrayOfArrays = [];
    let i = 0;

    for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex++) {
        i = rowIndex;
        const array = [];
        arrayOfArrays.push(array);
        for (let row = 0; row < matrix.length; row++) {
            array.push(matrix[row][i]);
        }
    }
    return arrayOfArrays;
};


const wordSearch = (letters, word) => {
    // looking for words horizontally on letters array
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log('Horizontal join:', horizontalJoin);

    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    // looking for words vertically on the letters array
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    //console.log('vertical join:', verticalJoin);

    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}




wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');

module.exports = wordSearch;