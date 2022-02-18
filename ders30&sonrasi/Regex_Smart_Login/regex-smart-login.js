let formsec = document.querySelector("form");

let messagesec = document.querySelector(".message");
//let messagesec = document.querySelector("p");
let giveinfo = document.querySelector(".giveinfo");

formsec.addEventListener("submit", e => {
    e.preventDefault(); //sayfa yenilenmesi block - ÖNEMLI

    const get_data = formsec.getname.value; //getname html icindeki name alanindan geliyor
    
    const regexcheck = /^[a-zA-Z0-9]{8,12}$/

    if (regexcheck.test(get_data)) { //bos birakirsak default true algilanir
        messagesec.textContent = "Valid"
        giveinfo.textContent = "Welcome " + formsec.getname.value
        giveinfo.setAttribute("style", "color:green; text-align:center")
        messagesec.setAttribute("style", "color:green; text-align:center") //giris basarili olduktan sonra verilen mesaji setAttribute ile burada style vererek modifiye edebiliriz. 
    } else {
        messagesec.textContent = "Failed"
        messagesec.setAttribute("style", "color:red; text-align:center")
        giveinfo.textContent = "Try again... " + formsec.getname.value
        giveinfo.setAttribute("style", "color:red; text-align:center")
    }

    //console.log(get_data)
})