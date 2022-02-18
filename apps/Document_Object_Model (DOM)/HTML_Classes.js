// let ogren = document.querySelector("p")

// ogren.classList.remove("bla1", "bla2") //class silmek

// ogren.classList.add("bla3") //class eklemek

// console.log(ogren.classList)


////////////////////////////////////////////////////////////////////////////////////////////////////

let psec = document.querySelectorAll("p") //querySelectorAll  'ALL' olmasina dikkat tüm p etiketleri için

psec.forEach(i => {
    if (i.textContent.includes("Success")) {
        i.classList.add("basarili") //psec'i forEach ile tek tek gezip i değiskenine atayip oradan textContent'i includes ile check edip,
    }                               //eğer içeriginde Success yaziyorsa ona .basarili style'ini ekle
    
    else if (i.textContent.includes("Fail")) {
        i.classList.add("basarisiz")
    }
    else if (i.textContent.includes("Waiting")) {
        i.classList.add("beklemede")
    }
})