function secantes(x0, x1){

     // testa se o intervalo possui raiz
     if(fx(x0) * fx(x1) > 0){
          return console.log('ERRO: intervalo não possui raiz porque fx(x0) * fx(x1) > 0');
     }

     while(math.abs(fx(x1)) > erro){
          xn = x1 - ((fx(x1) * (x0 - x1)) / (fx(x0) - fx(x1)))
          x0 = x1
          x1 = xn
     }

     return console.log(x1);
}
