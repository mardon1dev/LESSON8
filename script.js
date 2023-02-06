"use strict"
// const yes = confirm("Tug'ilgan yilizni kiritishga rozimisiz");
// if (yes){
//     const addYear = +prompt("Tug'ilgan yilizni kiriting kiriting");
//     const years = [1985, 1995, 2000, 2005, 2010];
//     years.push(addYear);
//     function age1 (ageYear) {
//         return 2023 - ageYear;
//     }
//     for (let i = 0; i < years.length; i++) {
//         const ageNum = years[i];
//         console.log(age1(ageNum));
//     }
// }else{
//     alert("Rozi bo'lmasangiz oq yo'l")
// }

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);

// function multiplyTwo(num) {
//     return num * 2;
// }

for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const num2 = num * 2;
    console.log(num2);   
}
