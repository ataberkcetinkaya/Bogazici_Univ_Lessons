let butonsec = document.querySelector("button")
let kapsayicipopsec = document.querySelector(".kapsayici_pop")
let xsec = document.querySelector(".kapa")

butonsec.addEventListener("click", () => {
    kapsayicipopsec.style.display = "block" //kapsayicipop style icindeki display'i block haline getirmesini söylüyorum
})

xsec.addEventListener("click", () => {
    //if (xsec.textContent.includes("X")) > bu alan lazim olabilir
        kapsayicipopsec.style.display = "none"
})

kapsayicipopsec.addEventListener("click", () => {
    kapsayicipopsec.style.display = "none"
})

//derste hocanin yaptigi;
// kapsayicipopsec.addEventListener("click", (e) => {
//     if(e.target.className === "kapsayici_pop") {
//         kapsayicipopsec.style.display = "none"
//     }})