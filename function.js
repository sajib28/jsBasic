//function without argument
function msg(){
    console.log("This is test message");
}
msg();
// function with return value
function mul(a,b){
return a*b;
}
console.log(mul(20,10));

// Function with arguments
function myFunc(a, b){
console.log(a+b);
}
myFunc(20,40);

// Javascript Function Object
var add = new Function("a","b","return a+b");
   console.log(add(2,5));  



