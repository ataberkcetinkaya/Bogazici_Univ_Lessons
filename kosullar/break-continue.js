let numbers = [2,3,4,5,6,7,8,9,0,12] 

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 8) {  //number array icinde 8'i gorunce onu atla
//         continue;
//     }
//     console.log(numbers[i])
// }

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i])

if (numbers[i] === 7) { //veri tipi int yani number olduğu icin 3 esittir. veri tipi ayni kalacak sekilde (2 esittir de calisir)
    console.log("done")
    break;                      //istedigimiz veriye gelince break
}}