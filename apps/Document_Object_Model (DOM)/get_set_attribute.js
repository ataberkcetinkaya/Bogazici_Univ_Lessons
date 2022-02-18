//attribute; taglerin içerisinde extradan yazdigimiz kodlar...
//örn; <a href="https//:blablaldsfbv">Google</a> - burada a etiketinin attribute'u href'tir.

let asec = document.querySelector("a")

//console.log(asec.getAttribute("href")) //attribute'u çekeriz.

asec.getAttribute("href") //get ile once cagiririz.

asec.setAttribute("href", "https://changed_attribute") //set ile attribute degistiririz.

asec.setAttribute("target", "_blank") //linkin yeni sekmede acmasini sagladim
                //target yoksa ekliyor ve blank koyuyor. (setAttribute: Olan bir seyi degistirir, olmayan için ekleme yapar.)

console.log(asec)

console.log("***************************************************************")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let psec = document.querySelector("p")

psec.setAttribute("style", "font-weight:bolder") //p'tagine css ozelligi ekledim

console.log(psec)


console.log("***************************************************************")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ODEV KISMI
let hsec = document.querySelector("h1")

hsec.setAttribute("style", "color:green")

console.log(hsec)

console.log("***************************************************************")

let hsec2 = document.querySelector("h2")

hsec2.getAttribute("style")
hsec2.setAttribute("style", "letter-spacing:1px")

console.log(hsec2)