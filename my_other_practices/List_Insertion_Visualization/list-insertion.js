let input = document.getElementById("input"); //<input id="input" type="text" placeholder="Nickname">
let list = document.getElementById("list"); //<ul id ="list">
let button = document.getElementById("button"); //<button id="button" type="button" style="margin-top:10px;"><strong>Insert</strong></button>
let itemCount = 0; //sayac

button.addEventListener("click", () => {
    let inputValue = input.value; //input icerisindeki degerler 'inputValue' degiskeninde

    if (/^[\s]*$/.test(inputValue)) {  //inputValue degiskeni ile kutuya bos veri girilip girilmedigine göre check
        alert("Please provide the valid input");
        return;
    }

    let newItem = document.createElement("li"); //veri varsa, newItem degiskeni ile <li> olustur
    newItem.append(inputValue); //ve ona inputValue ile gelen degeri append et.

    ++itemCount; //sayaci arttir.

    if (itemCount % 3 === 0) { //eger sayac degeri 3e bolunuyorsa <li> kirmizi olacak
        newItem.style = "color:red;"; //yani her 3. eleman kirmizi renkte olacak
    }
    else {
        newItem.style = "color:black;"; //digerleri siyah
    }

    list.append(newItem); //en sonda da verileri listeye append.
    input.value = ""; //her butona bastigimda kutunun icini temizleyecek
})

