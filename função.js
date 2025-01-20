function historico(){
    var vitorias = 101;
    var derrotas = 10;
    return vitorias - derrotas
}

var calculo = historico()

if (calculo <= 10){
    console.log("Ferro")
}
else if (calculo > 10 && calculo <= 20){
    console.log("Bronze")
}
else if (calculo > 20 && calculo <=50){
    console.log("Prata")
}
else if (calculo > 50 && calculo <= 80){
    console.log("ouro")
}
else if (calculo > 80 && calculo <= 90){
    console.log("Diamante")
}
else if (calculo > 90 && calculo <= 100){
    console.log("Lendario")
}
else if (calculo >= 101){
    console.log("Imortal")
}
