//Task 2 - Logic-based Tasks
let array = [
  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210,
  34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980,
];

//a. Sort the numbers from lowest to highest
function lowestHightest(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      console.log(arr[i + 1], arr[j]);
      if (arr[i + 1] < arr[j]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

//b. Sort the numbers from highest to lowest
function hightestLowest(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[i + 1] > arr[j]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

lowestHightest(array);
//console.log(array);
//hightestLowest(array);
//console.log(array);

//c. Return an array of unique numbers.

function uniqueArrayGenerator(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//console.log(uniqueArrayGenerator(array));

//Calculate the sum of the numbers in the array referred to in the problem statement

function sumCalculator(arr) {
  let sum = arr.reduce((count, element) => {
    return (count += element);
  }, 0);

  return sum;
}

//console.log(sumCalculator(array));
