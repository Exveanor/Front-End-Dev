function createObject (firstName, lastName, age) {
    let obj = {};
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;

    return obj;
}

console.log(createObject("Eva", "Banina", "27"));
