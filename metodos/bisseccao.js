function bisseccao(a, b){

     // dados da tabela
     var iteracoes = [];
     var raizes = [];
     var fRaizes = [];
     var erros = [];
     var lnErros = [];
     var iteracao = 0;

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

          // atualizando tabela
          iteracao++
          iteracoes.push(iteracao)
          raizes.push(media)
          fRaizes.push(fx(media))
          erros.push(math.abs(fx(a) - fx(b)))
          lnErros.push(math.log(math.abs(fx(a) - fx(b)), math.e))
     }


     // retorna resultado
     renderTabela(iteracoes, raizes, fRaizes, erros, lnErros)
     renderGrafico(lnErros)
     return console.log(((a + b) / 2));

}
