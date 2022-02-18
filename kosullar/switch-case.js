let grade = 50

switch(grade) {  //switch yazilip direkt neyi sorgulatacaksak parantez icine o girilir
    case 50:
        let extra_points = 20 //case içinde farkli farkli islemleri yaptirabiliriz
        console.log("Grade w extra points: " + (grade + extra_points))
        break;
    case 40:
        console.log("Grade is 40")
        break;
    case 30:
        console.log("Grade is 30")
        break;
    default:
        console.log("wrong points")
}