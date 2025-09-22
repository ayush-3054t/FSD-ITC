// console.log("Hello World");
// let a=20;
// console.log(a);
// var a=30;


// var a=50;
// if(a>10){
//     var a=100;
//     console.log(a);
// }
// else{
//     console.log("hey")
// }
// console.log("hii"+a);

// let a=50;
// if(a>10){
//     let a=100;
//     console.log(a);
// }
// else{
//     console.log("hey")
// }
// console.log("hii"+a);

// const a=23;
// a=50;


//Function

// function fun(mag){
//     return "hii"+ msg;
//     console.log("hello");
// }
// const data=fun("greeting");
// console.log(data);


//Arrow function 
// const data=()=>{
//     console.log("hey  ")
// }
// data();

// const data= msg=>msg;
// const output=data("Greeting");
// console.log(output);

//IIFE 


// (function(){
//     console.log("Welcome to mern session ")
// })();

// function greet (msg="java"){
//     console.log(msg+"jhsfkjvbs");
// }
// greet("python");



// function selectLanguage(lang) {
//     let result;

//     if (lang === 'java') {
//         function javaCompiler() {
//             return "using java compiler";
//         }
//         result = javaCompiler();
//     } else if (lang === 'c') {
//         function cCompiler() {
//             return "using c compiler";
//         }
//         result = cCompiler();
//     } else {
//         result = "no compiler found";
//     }

//     return result;
// }
// console.log(selectLanguage('java')); 
// console.log(selectLanguage('c'));    
// console.log(selectLanguage('python')); 


function selectLanguage(lang) {
    let result;

    if (lang === 'java') {
        function javaCompiler() {
            return "using java compiler";
        }
        result = javaCompiler();
    } else if (lang === 'c') {
        function cCompiler() {
            return "using c compiler";
        }
        result = cCompiler();
    } else {
        function pythonCompiler() {
            return "using python compiler (default)";
        }
        result = pythonCompiler();
    }

    return result;
}