// declare array
var numbers = [10, 34, 76, 52, 99];
var element = numbers[0];

// get element by index
console.log(numbers[2]);
console.log(element);

// set element value by index
numbers[3] = 5;
numbers[1] = 30;
console.log(numbers);

// find index of an element
var positionIndex = numbers.indexOf(99);
console.log(positionIndex);

// not in array 
var positionIndex = numbers.indexOf(199);
console.log(positionIndex);