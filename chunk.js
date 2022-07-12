const chunkArray = (arry, len) => {
    const chunkedArr = [];

    arry.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    })
    return chunkedArr
}

module.exports = chunkArray