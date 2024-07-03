//Task 2 - Logic-based Tasks
// 1 

let array = [
  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210,
  34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980,
];

//1. a. Sort the numbers from lowest to highest
function lowestHightest(arr) {
  // copy arr into newArr
  let newArr = arr.slice();
  newArr.sort((a,b)=>{return a-b});

  return newArr;
}
console.log(lowestHightest(array));

//1. b. Sort the numbers from highest to lowest

function hightestLowest(arr) {
  // copy arr into newArr
  let newArr = arr.slice();
  newArr.sort((a,b)=>{return b-a});

  return newArr;
}
console.log(hightestLowest(array));


//1. c. Return an array of unique numbers.

function uniqueArrayGenerator(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(uniqueArrayGenerator(array));


//1. d. Calculate the sum of the numbers in the array referred to in the problem statement

function sumCalculator(arr) {
  let sum = arr.reduce((count, element) => {
    return (count += element);
  }, 0);

  return sum;
}
console.log(sumCalculator(array));


//1. e. Return a new array with elements that are less than or equal to 100

function lessOrEqual100(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i]<= 100){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(lessOrEqual100(array));


//1. f. Return a new array with elements that are greater than 50

function greaterThan50(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 50){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(greaterThan50(array));


//1. g. Return a new array with elements that are divisible by 2
function divisibleBy2(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(divisibleBy2(array));


//1. h. Return a new array with elements that are divisible by 3
function divisibleBy3(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(divisibleBy3(array));


//1. i. Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
function divisibleNeither2Or3(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 3 !== 0 && arr[i] % 2 !== 0){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(divisibleNeither2Or3(array));


//1. j. Declare a variable that counts how many elements are in the original array
const arrLength = array.length;
console.log(arrLength);

//1. k. Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3.
let reversedArr = array.slice().reverse();
console.log(reversedArr);

// 2. 

let array2 = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
//2. a. Using a for loop and a variable, return all values that are numbers
function onlyNumbers(arr) {
  let newArr = [];
  for(let i = 0; i <arr.length; i++){
    if(typeof arr[i]=== "number"){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log(onlyNumbers(array2));

//2. b. Using a while loop and a variable, return all values that are strings
function onlyStrings(arr) {
  let newArr = [];
  let i = 0;
  while(i < arr.length) {
    if(typeof arr[i]=== "string"){
      newArr.push(arr[i])
    }
    i++;
  }
  return newArr;
}
console.log(onlyStrings(array2));

//2. c. Using a do while loop, return the sum of all values in the array

function sumCalculator2(arr){
  let i = 0;
  let sum = 0;
  do {
    if(typeof arr[i] === "number"){
      sum += arr[i];
    }
    
    i++;
  } while (i < arr.length);
  return sum;

}
console.log(sumCalculator2(array2))

//2. d. Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting that follows the basic English grammar standards. Eg “Hello, Sarah, Thabo, and Mariah.”.

function greeting(arr){
  let greeting = "Hello";
  let names ="";
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i]=== "string"){
      names = names.concat(", ", arr[i]);
    }
  }
  return greeting.concat(names).concat(".");
}
console.log(greeting(array2))

//2. e. Using any looping structure of your choice and a new variable, remove all values in the array that are strings
function removeStrings(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== "string"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeStrings(array2));


