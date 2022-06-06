function mdc(){
    var numero1 = prompt ('Informe o primeiro número');
    var numero2 = prompt ('Informe o segundo número');
    var i = 0;
    var contador = 0;
    while (i < numero1){
        if (numero1 % i == 0 && numero2 % i == 0){
            contador = i;
        }
        i = i + 1;
    }
    document.write('O MDC é: ' + contador);
}