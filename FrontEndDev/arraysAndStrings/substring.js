function substring (word, sentence) {

    let wordsArray = sentence.toLowerCase().split(" ");
    let output = `${word} not found!`;

    for (let i = 0; i < wordsArray.length; i++) {
        let currentWord = wordsArray[i];
        if (currentWord === word) {
            output = currentWord;
        }
    }

    console.log(output);
}

substring ('javascript','JavaScript is the best programming language')