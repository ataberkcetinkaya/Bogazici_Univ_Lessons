let list = ["berk", "yeliz","zeynep","buket"]

//REGULAR FOR-LOOP
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
// }

list.forEach(function(x, index) { //fonksiyon icerisine yazdigimiz 'x', regular-loop'taki 'i' ile eşdeğer
    
    index = index + 1

    console.log(x, index)
})

//////////////////////////////////////////////////////////////////////////////
console.log("****************************")

var numbers = [1, 2, 3, 4, 5];

var sum = 0

numbers.forEach(function(i) {
  sum = (sum + i)  //sum += i
});

console.log(sum) //15