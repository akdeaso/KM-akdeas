//built-in function/method js

//STRING
const myName = "tri brigade zoodiac"
const firstName = "tri"
const lastName = "brigrade"
const tier = 0
//slice
const hasilSlice = myName.slice(0, 3)
console.log(hasilSlice)
//concat
const hasilConcat = myName.concat(" adalah", " tier 0")
console.log(hasilConcat)
//string literal
const fullName = `halo nama saya ${firstName} ${lastName} dan tier ${tier}`
console.log(fullName)
//split
const hasilSplit = myName.split(" ")
console.log(hasilSplit)
//toUppercase
const hasilUpperCase = myName.toUpperCase()
console.log(hasilUpperCase)
//toLowercase
const hasilLowerCase = myName.toLowerCase()
console.log(hasilLowerCase)
//includes
const isExist = myName.includes("bri")
console.log(isExist)

const students = ["drytron", "numeron", "ss", "phantom", "kaiju", "doom"]
//ARRAY
//splice
const hasilSplice = students.splice(2, 4)
console.log(hasilSplice)
//slice
const hasilSliceArray = students.slice(2, 4)
console.log(hasilSliceArray)
//concat
const hasilConcatArray = students.concat("traptrix")
console.log(hasilConcatArray)
//reverse
const hasilReverse = students.reverse()
console.log(hasilReverse)
//join
const hasilJoin = students.join()
console.log(hasilJoin)

const reverseName = myName.split(" ").reverse().join(" ")
console.log(reverseName)
//includes
const isExistArray = students.includes("numeron")
console.log(isExistArray)
//foreach
let numbers = [2, 4, 5, 6, 8, 9, 3]
// const hasilForEach = numbers.forEach((isiArray, index) => {
//     numbers[index] = isiArray * 3
// })
// console.log(hasilForEach)
//map
const hasilMap = numbers.map((isiArray, index) => {
    return isiArray
})
console.log(hasilMap, "hasil map")
//indexOf
const indexKe = numbers.indexOf(3)
console.log("index ke ", indexKe)
//sort
const hasilSorting = numbers.sort((a, b) => {
    return a - b
})
console.log(hasilSorting, "hasil sorting")
//find
const hasilFind = numbers.find((value, index) => {
    return value < 5
})
console.log(hasilFind, "hasil find")
//filter
const hasilFilter = numbers.filter((value, index) => {
    return value < 5
})
console.log(hasilFilter, "hasil filter")


//NUMBER
//parseInt
const myAge = "20"
const hasilParseInt = parseInt(myAge)
console.log(hasilParseInt)
console.log(typeof hasilParseInt)
//parseFloat
const resultTest = "20.5"
const hasilParseFloat = parseFloat(resultTest)
console.log(hasilParseFloat)
//math round
const hasilMathRound = Math.round(2.6)
console.log(hasilMathRound)
//math ceil
const hasilMathCeil = Math.ceil(5.01)
console.log(hasilMathCeil)
//math floor
const hasilMathFloor = Math.floor(8.9999999)
console.log(hasilMathFloor)
//math random
const hasilRandom = () => {
    const number = parseInt(Math.random() * numbers.length)
    if (number !== -0) {
        return number
    } else {
        return 0
    }
}
console.log(hasilRandom())

//
const changeChar = (str) => {
    if (typeof str === 'string') {
        let splitStr = str.split(" ")
        let temp = splitStr.map(val => {
            let eachWord = val.split("")
            eachWord[0] = eachWord[0].toUpperCase()
            return eachWord.join("")
        })
        return temp.join(" ")
    } else {
        alert("salah parameter")
    }
}
console.log(changeChar("selamat malam"))