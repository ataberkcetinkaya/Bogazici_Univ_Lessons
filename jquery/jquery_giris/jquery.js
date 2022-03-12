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

$(document).ready(function() {
    $("button").click(function() {
        $(this).remove(); //'this' ile burada button kendini yokeder.
    })
})

$(document).ready(function() {
    $("button").click(function() {
        $("*").remove(); //'*' ile her şey yokolur.
    })
})