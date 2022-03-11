let container = document.querySelector(".container");
let span = document.querySelectorAll("span"); //All ile tüm spanleri seciyorum

span.forEach(e => {
    container.addEventListener("click", x => { //container icinde
        if(x.target.tagName === "SPAN") { //eğer istedigim yere tiklanirsa yani SPAN'A (buyuk harfe dikkat),
            x.target.parentElement.remove(); //o zaman git ve onun parentElement'ini sil.
        }
    })
})