function cordas(a, b){

     // testa se o intervalo possui raiz
     if(fx(a) * fx(b) > 0){
          return console.log('ERRO: intervalo não possui raiz porque fx(a) * fx(b) > 0');
     }

     // determinando x0 e c
     if(fx(a) * fxdd(a) > 0){
          c = a
          x0 = b
     }else{
          c = b
          x0 = a
     }

     // primeira iteracao
     x = (x0 - (fx(x0) * (x0 - c)) / (fx(x0) - fx(c)))
     x0 = x

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x)) > erro){
          x = (x0 - (fx(x0) * (x0 - c)) / (fx(x0) - fx(c)))
          x0 = x
     }

     // retorna resultado
     return console.log(x);

}
