function dvd_collection(dvds) {
    let integer = dvds.shift();
    let collection = dvds.slice(0, integer);
    
    function isValidIndex(index) {
        return index >= 0 && index < collection.length;
    }
    
    for (let i = integer; i < dvds.length; i++) {
        let command = dvds[i].split(' ');

        if (command[0] === "Watch") {
            if (collection.length > 0) {
                console.log(`${collection.shift()} DVD watched!`);
            }
        } else if (command[0] === "Buy" && command.length >= 2) {
            command.shift();
            collection.push(command.join(" "));
        } else if (command[0] === "Swap" && command.length === 3) {
            let startIndex = command[1];
            let endIndex = command[2];

            if(startIndex === "" || endIndex === "") {
                continue;
            }

            let startIndexNum = Number(command[1]);
            let endIndexNum = Number(command[2])

            if (isValidIndex(startIndexNum) && isValidIndex(endIndexNum)) {
                let temp = collection[startIndex];
                collection[startIndexNum] = collection[endIndexNum];
                collection[endIndexNum] = temp;
                console.log("Swapped!");
            }
        } else if (command[0] === "Done") {
            break;
        }
    }
    
    if (collection.length > 0) {
        console.log("DVDs left: " + collection.join(', '));
    } else {
        console.log("The collection is empty");
    }
}


dvd_collection (['5', 'The Lion King', 'Frozen', 'Moana', 'Toy Story', 'Shrek', 'Buy The Lion King','hjgda', 'Done']);

