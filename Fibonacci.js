function fibonacci (){
    var quantidadeFibonacci = prompt ('Informe a quantidade de números da sequência de Fibonacci');
    var i = 0;
    var numero1 = 0;
    var numero2 = 1;
    var numero3 = 0;
    var contador = 0;
    while (i < quantidadeFibonacci){
        numero3 = numero1 + numero2;
        numero1 = numero2;
        numero2 = numero3;
        i = i + 1;
        contador = contador + 1;
    }
    document.write('O número ' + contador + ' da sequência de Fibonacci é: ' + numero3);
}