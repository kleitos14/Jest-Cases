const { expect } = require('expect');
const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an Array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;

    const chunckedArr = chunkArray(numbers, len);
    expect(chunckedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
});


test('Chunk an Array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3];
    const len = 1;

    const chunckedArr = chunkArray(numbers, len);
    expect(chunckedArr).toEqual([[1], [2], [3]])
});
