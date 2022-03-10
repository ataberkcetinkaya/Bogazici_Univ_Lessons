let body = document.querySelector("body");

console.log(body.parentElement); //parentElement bir üstündekini verecek. bu kisimda head ve html

//////////////////////////////////////////////////

let ulsec = document.querySelector("ul");

Array.from(ulsec.children).forEach(x => { //cocuklari forEach ile gezebilmemiz için array yapmaliyiz. HTML collection'i gezmemiz icin array olmali
    console.log(x.textContent); //veya sadece console.log(x);
})

//////////////////////////////////////////////////

let bir = document.querySelector(".bir");

console.log(bir.nextElementSibling.setAttribute("style","color: pink")); //sonraki elemente ulasmak icin 'nextElementSibling'
//previousElementSibling

//////////////////////////////////////////////////

Array.from(ulsec.children).forEach(x => {
    x.setAttribute("style", "background-color:yellow;")
    x.classList.add("blabla") //forEach ile gezerken her birine ayni zamanda class ekle

    console.log(x);
})