function pascalCaseSplit (text) {

    let wordsRegex = /[A-Z][a-z]*/g;
    let wordsArray = text.match(wordsRegex);
    let resultString = wordsArray.join(", ");

    console.log(resultString);

}

pascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')