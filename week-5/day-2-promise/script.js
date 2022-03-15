console.log("promise")
//Promise
//janji
let sudahDatang
let kondisi = "avail"

const doATask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ini yang atas")
    }, 3000);
})

const doATask1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (kondisi === "avail") {
            resolve("janji terpenuhi")
        } else {
            reject("ada kendala nich")
        }
    }, 2000);
})

//Callback statement
// doATask.then((res) => {
//     console.log(res)
// })

// doATask1.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//Asynchronus process
const doAPromise = async () => {
    try {
        const result = await doATask1
        const result1 = await doATask
        console.log(result)
        console.log(result1)
    } catch (error) {
        console.log(error)
    }
}

doAPromise()

//Pending

//Fullfilled/resolved

//Rejected

//Untuk mengehandle pending pada suatu promise



