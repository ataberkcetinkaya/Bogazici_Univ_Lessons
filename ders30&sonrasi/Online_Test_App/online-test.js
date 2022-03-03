let answersheet = ["D", "D", "D", "D"]; //cevap anahtari, cevaplari bununla kiyaslayacagiz.

let form = document.querySelector("form");
let info = document.querySelector(".info");

form.addEventListener("submit", e => { //button form elementinin icerisinde, o yuzden form.addEventListener ile submit olarak giriyoruz.
    e.preventDefault()
    
    let point = 0;
    let user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value] //kullanicidan alacagimiz cevaplar, birden fazla olacagiz icin array olacak
                                                                //sorularin degerlerini '.value' ile aliyoruz.

    user_answers.forEach((x, index) => { //index, answersheet'in index'inden geliyor
        if (x === answersheet[index]) {
            point = point + 25;
        }
    })

    //info.textContent = ("Total Points: " + point);  

    if (point === 0) {
        info.style.backgroundColor = "red";
        info.style.color = "white";
        info.textContent = "Failed with " + point + " points";
    }
    if (point === 25) {
        info.style.backgroundColor = "yellow";
        info.style.color = "black";
        info.textContent = "OK. " + point + " points";
    }
    if (point === 50) {
        info.style.backgroundColor = "orange";
        info.textContent = "Half there. " + point + " points";
    }
    if (point === 75) {
        info.style.backgroundColor = "purple";
        info.style.color = "white";
        info.textContent = "Almost there. " + point + " points";
    }
    if (point === 100) {
        info.style.backgroundColor = "green";
        info.style.color = "white";
        info.textContent = "Congrats. " + point + " points";
    }
})