let sendli = document.querySelector(".list") //html'den list class'i ceker

let list = ["elanur", "berk", "yeliz","zeynep","buket"] //listemiz

let html = `` //boş html

list.forEach(function(users) { //forEach ile users degiskeni altinda html + li etiketleriyle her bir user'i ekrana bastiririz
    html += `<li>${users}</li>`
})

sendli.innerHTML = html 
//ve innerHTML,bizim yukaridaki boş olarak verip daha sonra üzerine ekleme yaptigimiz html kodlarini ekletir.