//The simplest way to check for null is to know that null evaluates to false in conditionals or if coerced to a boolean value:
const maybeNull = null;
if(maybeNull){
    console.log("Not null")
}else{
    console.log('could be null')
}

for(let i=0; null; i++){
    console.log("won't run");
}
maybeNull ? console.log("truthy value") : console.log("falsy value");
//https://medium.com/javascript-in-plain-english/how-to-check-for-null-in-javascript-dffab64d8ed5
//https://medium.com/dailyjs/rant-js-undefined-vs-null-7f90f203063b