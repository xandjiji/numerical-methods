function cordas(a, b){

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

     // atualizando tabela
     iteracao++
     iteracoes.push(iteracao)
     raizes.push(x)
     fRaizes.push(fx(x))
     erros.push(math.abs(fx(x)))
     lnErros.push(math.log(math.abs(fx(x)), math.e))

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x)) > erro){
          x = (x0 - (fx(x0) * (x0 - c)) / (fx(x0) - fx(c)))
          x0 = x

          // atualizando tabela
          iteracao++
          iteracoes.push(iteracao)
          raizes.push(x)
          fRaizes.push(fx(x))
          erros.push(math.abs(fx(x)))
          lnErros.push(math.log(math.abs(fx(x)), math.e))
     }

     // retorna resultado
     renderTabela(iteracoes, raizes, fRaizes, erros, lnErros)
     renderGrafico(lnErros)
     return console.log(x);

}
