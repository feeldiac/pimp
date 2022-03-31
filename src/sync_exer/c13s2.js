//Conversor a camelCase

function toCamelCase(string) {
    let newString = string.replace(/(_|-)(.)/g, (a,b,c) => c.toUpperCase())
    return newString
}


