function arrRotation (givenArr, rotations) {

    for (let i = 0; i < rotations; i++) {
        const element = givenArr.shift();
        givenArr.push(element);
        
    }

    console.log(givenArr.join(" "));

}

arrRotation ([51, 47, 32, 61, 21], 2);