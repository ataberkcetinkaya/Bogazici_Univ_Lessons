$(document).ready(function() {
    /* $(".show").click(function() {
        $(".text").slideDown(); //slideDown(slow); || slideDown(2500);
    }) */

    /* $(".show").click(function() {
        $(".text").slideUp();
    }) */

    $(".show").click(function() {
        $(".text").slideToggle();
        $(".text").css("background-color","orange")
        $(".show").css("background-color","green") //veya $(this).css("background-color","green")
    })
})