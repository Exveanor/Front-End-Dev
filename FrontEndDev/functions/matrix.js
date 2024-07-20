function simpleMatrix (number) {

    function printRow(num) {
        let singleRow = (num.toString() + " ").repeat(num);
        return singleRow;
    }

    for(let currentRow = 1; currentRow <= number; currentRow++) {
        console.log(printRow(number));
    }

}

simpleMatrix (3);