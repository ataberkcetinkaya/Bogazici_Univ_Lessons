let formsec = document.querySelector("div")

let bilgial = document.querySelector("#getname") //id'ye göre veri çekme, 2. yol

formsec.addEventListener("submit", e => { //form icin click degil, bilgiler submit edilip gönderilecegi için "submit" event geciyoruz
    
    e.preventDefault(); //bilgiler submit edildiginde sayfanin yenilenmesini engelliyoruz
    //console.log("data sent")

    console.log("Instagram: " + formsec.instagram.value)
    console.log("Twitter: " + formsec.twitter.value) //.value ile name alanina twitter girilen degeri cekiyoruz
    console.log("TikTok: " + formsec.tiktok.value)
    //////////////// 2.yol ///////////////////////////
    console.log("Name & Surname: " + bilgial.value)
})