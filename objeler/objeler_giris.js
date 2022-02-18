// let sinif_yonetimi = {

//     username: "blabla",
//     password: 1234,
//     mail: "blabla@gmail.com",

//     yazdir() {
//         console.log(this.username)

//         console.log(this) //tüm bilgileri alir
//     }

// }

// sinif_yonetimi.yazdir()


////////////////////////////////////////////////////////////////////////////////////////
let sinif_yonetimi = {

    username: "blabla",
    password: 1234,
    mail: "blabla@gmail.com",
    lessons: ["Math", "Science", "Astrophysics"],


    toplu_yazdir() {
        console.log(`Username: ${this.username}\nPassword: ${this.password}\nMail: ${this.mail}`)


        for (i = 0; i < this.lessons.length; i++) {
            
            sayac = console.log(i + 1 + " - " + this.lessons[i])

        }
    }
}

sinif_yonetimi.toplu_yazdir()
