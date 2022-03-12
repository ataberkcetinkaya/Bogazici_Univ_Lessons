//let p_sec = document.querySelector("p"); YERINE JQUERY ILE: $("p") ile seceriz ve nokta atip yapacagimiz islemi yazariz. $("p").click(function) gibi.
        
/* $(document).ready(function() { //bu satir CDN'de sorun yasayabiliriz diye
    $("button").click(function() { //butona tiklandiginda,
        $("p").remove(); //p'yi yoket.
    })
}) */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// Jquery Seçiciler - class/id //////////////////
/* $(document).ready(function() {
    $(".tikla").click(function() {
        $("#atbrk").remove();
    })
}) */

/* $(document).ready(function() {
    $("button").click(function() {
        $(this).remove(); //'this' ile burada button kendini yokeder.
    })
})

$(document).ready(function() {
    $("button").click(function() {
        $("*").remove(); //'*' ile her şey yokolur.
    })
}) */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// Jquery Events //////////////////
/* $(document).ready(function() {
    $("button").dblclick(function() { //double-click ile yokolur.
        $("*").remove();
    })
}) */

/* $(document).ready(function() {
    $("h2").mouseenter(function() { //mouse üzerine gelince etkilesim
        alert("a yes");
    })
})

$(document).ready(function() {
    $("h2").mouseleave(function() { //mouse ile üzerinden secili alanin disina cikinca etkilesim
        alert("a no");
    })
}) */

/* $(document).ready(function() {
    $("h2").hover(function() {
        alert("ur top of it");
    }, function() {
        alert("ur not anymore");
    })
}) */

$(document).ready(function() {
    $("input").focus(function() { //focus; input alanina tıklandıgında, etkileşime geçildiginde.
        $(this).css("background-color", "green"); //this ile bu input'u seçiyoruz ve .css ile css'ine müdahale edecegimizi belirtiyoruz.
    });
    $("input").blur(function() { //blur, input alanindan ciktigimizda calisacak
        $(this).css("background-color", "red");
        //CSS OZELLIKLERINI HER SEKILDE BURAYA EKLEYEBILIRIZ. FARKLI CSS'LER.
    });
})