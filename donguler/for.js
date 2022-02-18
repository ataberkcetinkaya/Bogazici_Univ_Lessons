// a = 25;

// for (i = 1; i <= a; i*=2) {
//     console.log(i)
// }

//NOT: carpma islemi ile dongude arttirma yapilacaksa örn: i*=2 yapilacaksa bastaki değer i = 1 verilmeli,
//aksi halde sürekli sifir ile carpip sonsuz donguye girecek

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let thelist = ["Berk", "Yeliz", "Esra", "Zeynep"]

// let i = 0

// for (i; i < thelist.length; i++) {
//     console.log(thelist[i]) //console'a sadece 'i' yi geçseydik listenin eleman sayisini ekrana yazdirirdi
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let db = ["Berk", "Yeliz", "Esra", "Zeynep"]

db = db.concat("blasdsd", "cddcsdcsd")

let i = 0

for (i; i < db.length; i++) {
    // let siranumarasi = i+1 + '. ' + db[i]     //sirali isim alma taktigi
    // console.log(siranumarasi)
    //veya
    let siranumarasi = i+1 + '. '
    let db_user = db[i]
    let together = `${siranumarasi} nolu kişi ${db_user}`
    console.log(together)   
}


console.log("Son eklenen: " + db[db.length-1]); //ek parantez icinde degere ulasir

console.log(db.length)