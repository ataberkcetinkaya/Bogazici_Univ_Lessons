/* $(document).ready(function() {
    $("button").click(function() {
        //$(".box").animate({left:"200px", opacity:"0.5"}); //animasyon islemlerini süslü parantezler icerisine yazariz. (virgül ile ayrilip, daha fazla islemler verilebilir)
     //kutunun hareket etmesi icin position: absolute degeri verilmeli.

       // $(".box").animate({height: "toggle"}); //kutuyu kapatip açar.

    })
}) */

$(document).ready(function() {
    $("button").click(function() {
        let box = $(".box"); //degisken ile secip kullanma yontemi

        box.animate({height: "300px", opacity: "0.5"}, "slow");
        box.animate({width: "400px", opacity: "0.9"}, "slow");
        box.animate({height: "500px"}, "slow");
    })
})