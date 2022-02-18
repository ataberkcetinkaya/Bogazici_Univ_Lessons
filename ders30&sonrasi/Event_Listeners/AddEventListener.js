//AddEventListener; HTML sayfalari üzerinde bulunan div'ler, paragraflar, vs. etkileşim içerisine almaktir
//Örn; bir kutu var ona tıkladıgımızda yokolacak, rengi degisecek vs.

let kutusec = document.querySelector(".kutu")

//addEventListener bir nevi kutu ile bir islem yapacagimiz anlamindadir
kutusec.addEventListener("click", () => {
   // console.log("clicked") //browser konsolunda tiklandi diye artik görürüz.

    kutusec.remove() //tiklandiginda kutuyu yokeder.

  // kutusec.style.backgroundColor = "pink" //tiklandiginda rengini degistirir. (.style ile style'i seceriz.)

   // kutusec.style.borderRadius = "30px" //tiklandiginde kenarliklari düzeltecek

   let h2sec = document.querySelector("h2")

    h2sec.innerHTML = h2sec.innerHTML + "Silindi" //veya h2sec.innerHTML += "Silindi"

    ////////////////////////////////////////////////

    // let lisec = document.querySelectorAll("li")

    // lisec.forEach(x => {
    //     x.addEventListener("click", () => {
    //         x.remove()         //burada listenin icerisinde hangi elemana tıklarsak onun silinmesini istiyoruz.
    //     })  //FAKAT BUNLARDA BUTON ILE YENI EKLENEN ELEMANI SILEMEYECEK
    // })
    //VEYA
    // lisec.forEach(x => {
    //     x.addEventListener("click", e => { //tek parametre olacaksa parantez yerine 'e' veya başka bir karakter de geçilebilir
    //         e.target.remove()  //ve '.target' ekliyoruz.
    //     })
    // })   //FAKAT BUNLARDA BUTON ILE YENI EKLENEN ELEMANI SILEMEYECEK

    ////////////////////////////////////////////////

    let butonsec = document.querySelector("button")
    let ulsec = document.querySelector("ul") //li'ler ul icerisinde oldugu icin buraya da yukaridaki button ile beraber ul geciyoruz

    //Yeni li olusturan alan
    butonsec.addEventListener("click", () => {
        let li_olustur = document.createElement("li") //li_olustur degiskeninin icinde document ile createElement yani li olusturacagiz diyoruz
        
        li_olustur.textContent = "berk" //li'nin icerigini belirliyoruz
        
        ulsec.append(li_olustur) //ve en sonda da yukaridaki ulsec'e liolusturumuzu append ederiz.
    })

    /*
    ulsec.addEventListener("click", (e) => {
        e.target.remove() //BURADA BUTON ILE YENI EKLENEN ELEMANI DA SILEBILECEK
    })
    */

    ////////////////////////////////////////////////

    // let li = document.querySelector("li").tagName
    //     console.log(li)                          TAGNAME OGRENMEK ICIN (calismazsa vs tagName ile denenebilir)

    ulsec.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") { //belirledigimiz e'nin target'indaki tagName LI'ye eşitse
            e.target.remove()   //remove() ile kaldır
        }
    })

    let i = document.querySelector("button").tagName;
    console.log(i)
    
})