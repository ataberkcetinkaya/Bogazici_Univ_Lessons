let merhaba = () => {        //let merhaba = function() yerine function yazisini silip sagina ok atarak arrow function yapiyoruz, fark bu
    return "Merhaba Dunya"
}

console.log(merhaba())

//////////////////////////////////////////////////////////////////////////////////////////

let selam = () => "selamsssss" //tek satirlik islem ise süslü parantez ve return'e de gerek yok.

console.log(selam())

//////////////////////////////////////////////////////////////////////////////////////////

let naber = sayi => console.log(sayi) //tek parametrede de paranteze gerek yok

naber(3)