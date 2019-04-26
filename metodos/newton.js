function newton(x0){

     // testa se o x0 eh valido
     if(fx(x0) * fxdd(x0) < 0){
          return console.log('ERRO: má escolha de x0');
     }

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x0)) > erro){
          x0 = (x0 - (fx(x0) / fxd(x0)))
     }

     // retorna resultado
     return console.log(x0);

}
