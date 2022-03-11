let zaman_al = document.querySelector(".saat");

//uyari verdirtme
let uyari_al = document.querySelector(".uyari");

let saat = () => {
    let zaman = new Date();

    let saat_al = zaman.getHours();
    let dakika_al = zaman.getMinutes();
    let saniye_al = zaman.getSeconds();

    let html_gom = `
        <span><strong>${saat_al} :</strong></span> 
        <span><strong>${dakika_al} :</strong></span> 
        <span><strong>${saniye_al}</strong></span>
    `

    zaman_al.innerHTML = html_gom; //yukarida zaman_al degiskeni ile HTML'den aldigimiz bölüme buradaki html_gom icerisindeki bilgileri tasiyorum

    //uyari verdirtme
    // if(saniye_al === 30) {
    //     uyari_al.innerHTML = "Target activated."
    // }

    //console.log(saat_al, dakika_al, saniye_al);
}

setInterval(saat, 1000) //saat 1000ms'de bir yenilensin, yani 1sn'de bir kez;


