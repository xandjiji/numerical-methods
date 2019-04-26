function ponto_fixo(x0){

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x0)) > erro){
          x0 = phi(x0)
     }

     // retorna resultado
     return console.log(x0);

}
