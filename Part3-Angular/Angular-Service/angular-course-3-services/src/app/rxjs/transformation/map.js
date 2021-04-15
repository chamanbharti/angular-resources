var numbers = [1,2,3,4,5];
function double(number){
    return number * 2;
}
var doubleNumbers = numbers.map(double);
console.log(doubleNumbers)//[ 2, 4, 6, 8, 10 ]

//filter
function greaterThanThree(value) {
    return value > 3;
}
var numbersGreaterThanThree = numbers.filter(greaterThanThree);
console.log(numbersGreaterThanThree);//[4,5]

//reduce
function sum(total,value){
    return total + value;
}
var total = numbers.reduce(sum,0);
console.log(total)//15