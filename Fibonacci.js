function Fibonacci(number){
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
for(var i = 2; i < number; i++){
    fib[i] = fib[i - 2] + fib [I - 1];
}
return fib;
}
var Fi = Fibonacci(10);
console.log(Fi);
