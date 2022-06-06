function numeroPrimo(){
    var numero = prompt ('Informe o número');
    var i = 0;
    var contador = 0;
    while (i < numero){
        if (numero % i == 0){
            contador = contador + 1;
        }
        i = i + 1;
    }
    if (contador == 2){
        document.write('O número é primo');
    }
    else{
        document.write('O número não é primo');
    }
}