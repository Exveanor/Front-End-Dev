function number_cardinality (my_number) {
    let givenNumber = my_number
    let lastDigit = my_number % 10;
    
    if (lastDigit === 0) {
        return "zero";
    } else if (lastDigit === 5) {
        return "five";
    } else if (my_number % 2 === 0 || lastDigit !== 0) {
        return "even";
    } else if (my_number % 2 !== 0 || lastDigit !== 5) {
        return "odd";
    }

}

console.log (number_cardinality (100))
console.log (number_cardinality (154))
