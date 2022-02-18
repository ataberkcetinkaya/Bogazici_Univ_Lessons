//document.querySelector("p").style.fontSize = "50px" veya asagidaki gibi degiskene atip farkli yerlerde kullanabiliriz.

let psec = document.querySelector("p")

console.log(psec.getAttribute("style")) //get ile style bilgisi alabilirim.

psec.setAttribute("style", "color:red") //set ile rengini kirmizi yaptim.

console.log(psec.getAttribute("style")) //yukarida rengini kirmizi yaptiktan sonra degisip degismedigini bu sekilde tekrar kontrol edebilirim.

//psec.setAttribute("style", "font-size:70px") //en son yazilan set kodu bir oncekini ezer.


//fazladan değerler verme;
psec.style.fontSize = "50px"
//psec.style.marginLeft = "20px"
psec.style.border = "2px solid black"
psec.style.borderWidth = "thin"

// let givemargin = () => {  //fonksiyon icinde manuel
//     m = "20px"
//     return m;
// }
// psec.style.marginLeft = givemargin()

let givemargin = (x) => {
    m = `${x}px` //kullanicinin girecegi piksel degeri ile birlestirip return ile geri postaliyorum
    return m;
}

psec.style.marginLeft = givemargin(40)