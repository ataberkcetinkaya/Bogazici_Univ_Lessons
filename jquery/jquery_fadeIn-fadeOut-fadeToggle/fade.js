$(document).ready(function() {
    $(".btn-warning").click(function() {
        $(".box1").fadeIn(1000);
        $(".box2").fadeIn(2000); //süre yerine "slow" veya "fast" yazilabilir.
        $(".box3").fadeIn(3000); //"slow", 0.15 degeri de denenebilir.
    })

    $(".btn-info").click(function() {
        $(".box1").fadeOut();
        $(".box2").fadeOut();
        $(".box3").fadeOut();
    })
});

//toggle ile tek buttonda iki islem
$(document).ready(function() {
    $(".btn-dark").click(function() {
        $(".box1").fadeToggle();
        $(".box2").fadeToggle();
        $(".box3").fadeToggle();
    })
});