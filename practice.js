let getinfo = document.querySelector("#bilgial");

let btn = document.querySelector("#abutton");

getinfo.addEventListener("submit", e => {
    e.preventDefault();

    console.log(getinfo.birinciparagraf.value);
    console.log(getinfo.ikinciparagraf.value);
    console.log(getinfo.ucuncuparagraf.value);
})