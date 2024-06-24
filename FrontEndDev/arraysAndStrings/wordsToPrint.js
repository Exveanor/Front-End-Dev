function wordsToPrint (textToProcess) {

    let regex = /#[A-Za-z]+/gm;

    let matches = textToProcess.match(regex);

    for (let word of matches) {
        word = word.replace('#','');
        console.log(word);
    }
}

wordsToPrint ('Nowadays everyone uses # to tag a #special word in #socialMedia');

console.log('------------------');

wordsToPrint ('The symbol # is known #variously in English-speaking #regions as the #number sign');