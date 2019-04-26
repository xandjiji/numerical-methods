function bisseccao(a, b){

     // testa se o intervalo possui raiz
     if(fx(a) * fx(b) > 0){
          return console.log('ERRO: intervalo não possui raiz porque fx(a) * fx(b) > 0');
     }

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(a) - fx(b)) > erro){
          // encontrando o ponto medio
          let media = ((a + b) / 2)

          // atualizando novo intervalo
          if(fx(a) * fx(media) < 0){
               b = media
          }else{
               a = media
          }
     }

     // retorna resultado
     return console.log(((a + b) / 2));

}
