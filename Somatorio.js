function somatorio(){
    var n = prompt("Informe a quantidade de números:");
        var num;
        var Soma = 0;
        var i = 0;
        
        while (i < n) {
            num = parseInt(prompt("Informe um número"));
            Soma = Soma + num;
            i = i + 1;
        }
    document.write("A Soma dos " + n + " números é " + Soma);
}