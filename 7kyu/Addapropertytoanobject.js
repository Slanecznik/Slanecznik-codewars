// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the
// property already exists on the object, and error should be thrown.
//

function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Свойство "${prop}" уже существует в объекте`);
    }
    obj[prop] = value;
}
let user = { name: "Alex" };

addProperty(user, "age", 25);
console.log(user); // { name: "Alex", age: 25 }



