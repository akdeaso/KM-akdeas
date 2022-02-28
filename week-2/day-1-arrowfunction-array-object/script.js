//arrow function
const salam = (param1, param2, param3) => {
    return param1 + param2 + param3
}
console.log(salam("a", "b", "c"))

//jika param cuma 1, kurung boleh dihapus
//jika arrow function cuma return sesuatu, maka tidak perlu scope
const genapGanjil = angka => angka % 2 === 0 ? "Genap" : "Ganjil;"
console.log(genapGanjil(10))

//function dg 2 param, param 1 untuk menentukan kelipatan berapa, param 2 batas akhir
const multiple = (step, stop) => {
    let result = []
    for (let i = step; i <= stop; i = i + step) {
        result.push(i)
    }
    return result;
}
console.log(multiple(6, 92))

//array
const students = ["trickstar", "tribrigade", "skyStriker", "raye", ["eldick", "drytron"]]
const meta = ["vword", "zoodiac", "utopia"]
//CRUD
//READ
console.log(students[1])
console.log(students[4][1])
//CREATE
//shift
console.log(meta, "sebelum ditambah")
meta.unshift("lyriusc")
console.log(meta, "sesudah ditambah")
//push
meta.push("eldick")
console.log(meta, "sesudah ditambah")
//UPDATE
meta[1] = "tribrigrade zoo"
console.log(meta)
//DELETE
//shift ->hapus array awal
meta.shift()
console.log(meta)
//pop->hapus array terahkir
meta.pop()
console.log(meta)
console.log(meta.length)

//object
const bio = {
    firstName: "mesu",
    secondName: "gaki",
    lastName: "wkwkw",
    age: 13,
    isMarried: false,
    hobi: ["makan", "main", "ngorok"],
    fullName: function () {
        return this.firstName + this.lastName
    }
}
//READ
//dot notation
console.log(bio.lastName)
console.log(bio.hobi[0])
//square notation
console.log(bio["lastName"])
console.log(bio["hobi"][0])
//CREATE
bio.address = "jalan menuju surga"
console.log(bio)
//UPDATE
bio.address = "jalan setan"
console.log(bio)
//DELETE
delete bio.secondName
console.log(bio)

//Destruction pada array dan object
//array
let deck = ["vword", "zoodiac", "utopia"]
let [name1, name2, name3] = deck
console.log(name3)
//object
let { firstName, lastName } = bio
console.log(lastName, "object")

//spread operator
//array
deck = [...deck, "timelord"]
console.log(deck, "ini spread")
//object
let funDeck = { ...deck, game: "master duel" }
console.log(funDeck)