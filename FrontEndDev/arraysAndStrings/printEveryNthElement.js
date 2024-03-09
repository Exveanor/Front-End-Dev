function print (givenArr, step) { 

    let output = [];
    let arrayLength = givenArr.length;

    for (let index = 0; index < arrayLength ; index+=step) {
        let currentNum = givenArr[index];
        output.push(currentNum);
    }

    return output;
}

print (['5','20','31','4','20'], 2);