// Code your solution in this file.
function lowerCaseDrivers(arr){
    function toLower(str){
        return str.toLowerCase()
    }
    return arr.map(toLower)
}
function nameToAttributes(arr){
    function splitName(str){
        return {"firstName": str.split(" ")[0], "lastName": str.split(" ")[1]}
    }
    return arr.map(splitName)
}

function attributesToPhrase(arr){
    function toPhrase(obj){
       return obj.name + " is from " + obj.hometown
    }
    return arr.map(toPhrase)
}