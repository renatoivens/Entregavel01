function iniciarContador (minuto) {
    var total = 0;
    for(let i = 0; i < minuto.length; i++){
        if(minuto[i] > 100){
            total++;
        }
    }

    return total;
}
module.exports = iniciarContador