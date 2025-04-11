//some thing
let objectOne = {};
let objectTwo = new Object(); 

objectOne.name = 'Diovan Leal';
objectOne["name"] = 'Diovan Leal';

console.log(objectOne);
console.log(typeof objectOne);

//---------------

const pet = {
    "species": "Dog",
    "name": "Bob",
    "age": 1.5,
    "friends": [
        {
            "name": "Oliver",
        },
        {
            "name": "Mark",
        }

    ],
    "bestFriend": {
        "name":"Oliver",
    },
}

const key = "species"

console.log(pet)
console.log(pet[key])
console.log(pet.species)
console.log(typeof pet)

//keys always are string keys will be stringified

const objectKeys = {}
objectKeys[1] = "Name"
objectKeys["1"] = "Lastname"
console.log(objectKeys)

objectKeys[true] = 'True!!!'

console.log(objectKeys["true"])

//adding property function
pet.say = function () {
    return `Hello my name is ${pet.name}`
}

console.log(typeof pet.say)

//methods to object

const entriesFromObject = Object.entries(pet)
console.log('entriesFromObject ->', entriesFromObject)

const keysFromMyObject = Object.keys(pet)
console.log('keysFromObject ->', keysFromMyObject)

const valuesFromMyObject = Object.values(pet)
console.log('valuesFromMyObject ->', valuesFromMyObject)

