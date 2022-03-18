$(document).ready(function() {
    $("input").on("keyup", function() {
       let data = $(this).val().toLowerCase(); //alacagimiz veriyi degisken icinde veriyoruz ve this buradaki input'u ifade eder.
       $("tbody tr").filter(function() {
           $(this).toggle($(this).text().toLowerCase().indexOf(data) > -1) //this'i yani 'tbody tr'yi toggle olarak acilir kapanir olarak getir. daha sonra da this.text ile metnini aliriz.
       })                                          //indexOf ile data ile text'i karsilastirip - 1 den büyükse çünkü index 0'dan baslar.
    });
});