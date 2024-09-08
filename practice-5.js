/**
 * WRITE A PROGRAM THAT WILL PRINT SUM OF ALL THE NUMBERS THAT ARE DIVISIBLE BY 3 AND 5 FROM 1-100. 
 */
let sum = 0;

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        sum += i;
    }
    
}
console.log('the sum number is: ', sum);