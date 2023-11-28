//Opposite of Parse is stringify (parse = separate , stringify = puts them together)
const real_data = [
    {
        "id" : 1,
         "name" :"Carlos"
    },
    {
        "id" : 2,
        "name" :"Meg"
    }
];

console.log(real_data) // only tells thats its an array not whats in it
console.log(real_data.length) // how many characters

console.log( JSON.stringify(real_data) ) //no indentation AKA not pretty version
console.log(JSON.stringify(real_data,undefined, 4)) // indented AKA pretty printing