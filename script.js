// const numArr = [125, 555, 44];

// function myTax(tax) {
//     if(tax >= 30 && tax <=300){
//         return tax*.15;
//     } else{
//         return tax*.30;
//     }
// }
// for ( let i = 0; i < numArr.length; i++){
//     console.log(myTax(numArr[i]));
// }

// Arraydan faqat toq va 
const numArr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13];

function numArray(number) {
    if (number % 2 == 1 && number >=0){
        return number;
    } else{
        
    }
}

for ( let i = 0; i < numArr.length; i++){
    console.log(numArray(numArr[i]));
}
// Kalkulyator 
for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} =`, i*j);
    }
    console.log(`********************`);  
}