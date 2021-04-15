// step 1
// function show() {
//     console.log('I am show funciton');
// }
// function geeky(callback) {
//     console.log('before call back');
//     callback();
//     console.log('after call back');
// }
// geeky(show);

// step 2
// function show(a) {
//     console.log('I am show funciton '+ a);
// }
// function geeky(chaman) {
//     console.log('before call back');
//     var a = 10;
//     chaman(a);
//     console.log('after call back');
// }
// geeky(show);

// step 3
// function geeky(callback) {
//     console.log('before call back');
//     var a = 10;
//     callback(a);
//     console.log('after call back');
// }
// geeky(function show(a){
//     console.log('I am show funciton '+ a);
// });

// step 4
// function geeky(callback) {
//     console.log('before call back');
//     var a = 10;
//     callback(a);
//     console.log('after call back');
// }
// geeky(function(a){
//     console.log('I am show funciton '+ a);
// });

// step 5
// function geeky(callback) {
//     console.log('before call back');
//     var a = 10;
//     callback(a);
//     console.log('after call back');
// }
// geeky(function(a){
//     console.log('I am show funciton '+ a);
// });

// // step 6
// function geeky(callback) {
//     console.log('before call back');
//     var a = 10;
//     callback(a);
//     console.log('after call back');
// }
// geeky ( a => console.log('I am show function '+a));


// synchronous way
/*
It waits for each operation to complete, after that it executes the next operation.
*/
// function show() {
//     console.log('I am show funciton ');
// }
// function geeky(callback) {
//     callback();
// }
// geeky(show);
// console.log('End')

// asynchronous way
/*
It never waits for each operation to complete, rather it executes all operation in the first go only.
*/

// setTimeout(
//     function show() {
//         console.log('I am show funciton ');
//     }, 5000);
// console.log('End')
//https://www.youtube.com/watch?v=pTbSfCT42_M

