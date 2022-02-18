//DOM, HTML sayfasi uzerinde etkilesim icindir

//let sec = document.querySelector(".paragraf") //querySelector secmemizi saglar. "p" <p> taglerini isaret eder.
                                                //.paragraf ise class'i isaret eder. nokta ile baslariz ve class ismi ile devam ederiz
                                                //id secerken de '#' kullaniriz


let sec = document.querySelectorAll("p") //querySelectorAll ile tüm <p> taglerini aliyorum.

sec.forEach(x => {
    console.log(x)
})

//console.log(sec) //tarayicinin console kismindan check edilebilir

let psec = document.querySelector("div .berk") //<div> taglerinin icindeki class'i 'berk' olani seç

console.log(psec)

////////////////////////////////////////////////////////////////////////////////////////////////

let idsec = document.getElementById("bla1") //getElementById ile calisirken '#' kullanimina gerek yok
console.log(idsec)

let idsec2 = document.getElementsByClassName("bla2") //direkt class adi gecilir
console.log(idsec2) //getElement icinde for loop donemeyiz. Query selector'da dönebiliriz çünkü query selector nodelist yani bir arraylist yollar

////////////////////////////////////////////////////////////////////////////////////////////////

let seeresult = document.querySelector("#bla1")
console.log(seeresult.innerHTML) //taglerin arasindaki sadece text'i alir