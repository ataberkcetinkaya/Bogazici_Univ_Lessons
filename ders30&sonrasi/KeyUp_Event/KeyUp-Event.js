//KEY_UP; inputa bir veri girildiginde onu alip belirtilen degiskene atar. KEY-OUT ise inputtan cikmamizi algilar.

let formsec = document.querySelector("form");

let messagesec = document.querySelector(".message");
//let messagesec = document.querySelector("p");
let giveinfo = document.querySelector(".giveinfo");

const regexcheck = /^[a-zA-Z0-9]{8,12}$/

formsec.addEventListener("submit", e => {
    e.preventDefault(); //sayfa yenilenmesi block - ÖNEMLI

    const get_data = formsec.getname.value; //getname html icindeki name alanindan geliyor
    
    

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

//KeyUp

let inputsec = document.querySelector("#getname");

//form.getname.addEventListener ile de ayni olay gerceklesir
inputsec.addEventListener("keyup", (e) => {
    //console.log(e.target.value) //e'nin tiklandigi yer yani target; onun degerini aliriz

    if (regexcheck.test(e.target.value)) { //e'nin target value' yani değeri true ise,
        e.target.setAttribute("style", "background-color:green; color:white")   //e' ye bir sey eklemek istedigimizi soyluyoruz
        messagesec.textContent = "Secure" //baska bir <p> olusturulup oraya da mesaj verdirtirilebilir
        messagesec.setAttribute("style", "text-align:center")
    }
    else {
        e.target.setAttribute("style", "background-color:red; color:white")
        //bu kisimda da bilgilendirme mesaji verdirtebiliriz.
    }
})