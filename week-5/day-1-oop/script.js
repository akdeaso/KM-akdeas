console.log("oop")
//OOP
//ada kelas dan object yang memiliki sifatnya sendiri
//menyelesaikan masalah atau algoritma menggunakan metode object

//Paradigma pemrograman
//cara kita menyelesaikan masalah atau algoritma menggunakan sudut pandang pemrograman

//Kenapa pakai OOP?
//bisa lebih rapih
//membuat program lebih centralized
//menyederhanakan masalah yang komplex menjadi bagian yang lebih kecil
//reusable
//memudahkan kita untuk menganalisa program yang kita buat

//OOP
const buah = {
    name: "buah",
    color: "kuning",
    bentuk: "lonjong"
}

// const Buah = (name, color, bentuk) => {
//     return {
//         name: name,
//         color: color,
//         bentuk: bentuk
//     }
// }

// const Buah = function (name, color, bentuk) {
//     this.name = name
//     this.coloer = color
//     this.bentuk = bentuk
// }

class Buah {
    constructor(name, color, bentuk) {
        this.name = name
        this.coloer = color
        this.bentuk = bentuk
    }
    caraMakan() {
        return `${this.name} harus dikupas dulu`
    }
}

const Pisang = new Buah("Pisang", "kuning", "lonjong")
const Apel = new Buah("apel", "merah", "bulat")

console.log(Pisang.caraMakan())
console.log(Apel)

class Hero {
    constructor(heroName, stamina, type, attack) {
        this.heroName = heroName
        this.stamina = stamina
        this.type = type
        this.attack = attack
    }
    #health = 100
    level = 20
    menyerang() {
        this.stamina -= 1
        return this.stamina
    }
    istirahat() {
        this.stamina += 1
    }
}

// const Zeus = new Hero("AA zeus", 5, "xyz", 3000)
// console.log(Zeus.menyerang())
// console.log(Zeus.istirahat())
// console.log(Zeus)

//inheritance
class Attribute extends Hero {
    constructor(heroName, stamina, type, attack) {
        super(heroName, stamina, type, attack)
    }
    showMyHealt() {
        return this.istirahat()
    }
    showMyName() {
        return this.heroName
    }
    istirahat() {
        if (this.type === "xyz") {
            return (this.stamina += 3)
        } else {
            return (this.stamina += 1)
        }
    }
}

const Zeus = new Attribute("AA zeus", 69, "pendulum", 10)
// console.log(Zeus.showMyHealt())
// console.log(Zeus.showMyName())

console.log(Zeus, "sebelum istirahat")
console.log(Zeus.istirahat())
console.log(Zeus, "sesudah istirahat")

//encapsulation
//untuk menentukan suatu property/method itu memiliki sivat private/public

//polymorphysm
//adalah membuat satu method dengan nama yang sama tanpa merubah parent secara langsung

//abstraction
class Student {
    constructor(props) {
        this.state = props
    }
}

const Roze = new Student({
    kriteria: "tinggi",
    hobbi: ["ngegame", "nonton"]
})

const Raye = new Student({
    kesukaan: ['makan', "minum", "nafas"],
    alamat: "jalan-jalan"
})

console.log(Roze)
console.log(Raye)

//kendaraan punya 
//bikin class hewan punya nama, kriteria, cara hidup, kebiasaan

// class Hewan {
//     constructor(props) {
//         this.state = props
//     }
// }

// const Kucing = new Hewan({
//     nama: "meng",
//     kriteria: "vivipar",
//     caraHidup: "dikasih makan",
//     kebiasaan: "turu"
// })

class Hewan {
    constructor(nama, kriteria, cara, kebiasaan) {
        this.nama = nama
        this.kriteria = kriteria
        this.cara = cara
        this.kebiasaan = kebiasaan
    }
    caraHidup() {
        return `Hewan ${this.nama} hidup dengan cara ${this.cara}`
    }
}

const Kucing = new Hewan("meng", "vivipar", "cari makan sendiri", "turu")
console.log(Kucing, Kucing.caraHidup())

class Warna extends Hewan {
    constructor(nama, kriteria, cara, kebiasaan, warna) {
        super(nama, kriteria, cara, kebiasaan, warna); {
            this.warna = warna
        }
    }
}

const kucingOren = new Warna("meng", "vivipar", "cari makan sendiri", "turu", "loreng")
console.log(kucingOren)