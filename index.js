// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

function toCamelCase(str){
    str = str.trim()
    str = str.split(' ')
    if (string.valueOf() == '') {
        return ''
    } else {
        return string.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        }).join('')
    }
}

String.prototype.camelCase=function (str) {
    let string = this.valueOf(str) 
    string = string.trim()
    string = string.split(' ')
    if (string.valueOf() == '') {
        return ''
    } else {
        return string.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        }).join('')
    }
}

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log(" ".camelCase(), "");

console.log(toCamelCase("test case"), "TestCase");
console.log(toCamelCase("camel case method"), "CamelCaseMethod");
console.log(toCamelCase("say hello "), "SayHello");
console.log(toCamelCase(" camel case word"), "CamelCaseWord");
console.log(toCamelCase(" "), "");