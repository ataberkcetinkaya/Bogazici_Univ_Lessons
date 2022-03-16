//acma-kapama tuslari aktiflestirme
/* $(document).ready(function() {
    $(".btn-danger").click(function() {
        $("p").hide(); //hide ve show icerisine zamanlama süresi verilebilir.
    });

    $(".btn-primary").click(function() {
        $("p").show();
    })
}) */


//Toggle (tekbutton)
$(document).ready(function() {
    $("button").click(function() {
        $("p").toggle();
    })
})