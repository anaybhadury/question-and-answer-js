
// ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করা
function printNumber(){
    for(let i = 1; i <= 5; i++){
        // console.log(i);
    }
}
// printNumber();

// ১ থেকে ৫ পর্যন্ত সংখ্যার যোগফল বের করা

function printSum(){
    let sum = 0;
    // console.log(sum);
    for(let i = 1; i <= 5; i++){
        // console.log(i);
        sum += i;
    }
    // console.log(sum);
}
// printSum();

// ৫ বার একটি শব্দ প্রিন্ট করা
function printRepeat(){
    for(let i = 1; i <= 5; i++){
        // console.log(i, ' hello world');
    }
}
// printRepeat();

// ৫ টি সংখ্যার গুণফল বের করা
function printMultiply(){
    let Multi = 1;
    for(let i = 1; i <= 5; i++){
        // console.log(i);
        Multi *= i;
    }
    // console.log('multiply number is: ', Multi);
}
// printMultiply();

// একটি অ্যারেতে ৫ টি সংখ্যা যোগ করা এবং প্রিন্ট করা
function printArray(){
    let arr = [];
    for(let i = 1; i <= 5; i++){
        // console.log(i);
        arr.push(i);
    }
    // console.log(arr);
}
// printArray();

// একটি সংখ্যার টেবিল প্রিন্ট করা
function printNamta(number){
    for(let i = 1; i <= 10; i++){
        // console.log(number + ' x ' + i + '= ' + (number * i));
    }
}
// printNamta(5);

// একটি অ্যারেতে সব সংখ্যার যোগফল বের করা
function printArrayOfSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    // console.log(sum);
}
// printArrayOfSum([4, 7, 8, 4, 7]);

// একটি অ্যারেতে বিজোড় সংখ্যাগুলো প্রিন্ট করা
function arrayOfOddNumbers(numbers){
    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i]);
        if(numbers[i] % 2 !== 0){
            // console.log(numbers[i]);
        }
    }
}
// arrayOfOddNumbers([5, 3, 6, 8, 4, 8, 33, 7, 88]);

// একটি অ্যারেতে জোড় সংখ্যাগুলো প্রিন্ট করা
function arrayOfOddNumbers(numbers){
    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i]);
        if(numbers[i] % 2 === 0){
            // console.log(numbers[i]);
        }
    }
}
// arrayOfOddNumbers([5, 3, 6, 8, 4, 8, 33, 7, 88]);

// ১০ এর কম যেসব সংখ্যা ৩ দিয়ে বিভাজ্য সেগুলো প্রিন্ট করা
function divisibleByThree(){
    for(let i = 1; i < 10; i++){
        if(i % 3 === 0){
            // console.log(i);
        }
    }
}
// divisibleByThree();

// একটি স্ট্রিং এর প্রতিটি অক্ষর প্রিন্ট করা
function stringOfWord (str){
    for(let i = 0; i < str.length; i++){
        // console.log(str[i]);
    }
}
// stringOfWord("Hello World");

// একটি অ্যারেতে সবচেয়ে বড় সংখ্যা খুঁজে বের করা
function bigNumberOfArray (numbers){
    
}
bigNumberOfArray([4, 2, 55, 696, 48, 28, 96]);