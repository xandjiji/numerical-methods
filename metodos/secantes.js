function secantes(x0, x1){

     // dados da tabela
     var iteracoes = [];
     var raizes = [];
     var fRaizes = [];
     var erros = [];
     var lnErros = [];
     var iteracao = 0;

     // testa se o intervalo possui raiz
     if(fx(x0) * fx(x1) > 0){
          return console.log('ERRO: intervalo não possui raiz porque fx(x0) * fx(x1) > 0');
     }

     while(math.abs(fx(x1)) > erro){
          xn = x1 - ((fx(x1) * (x0 - x1)) / (fx(x0) - fx(x1)))
          x0 = x1
          x1 = xn

          // atualizando tabela
          iteracao++
          iteracoes.push(iteracao)
          raizes.push(x1)
          fRaizes.push(fx(x1))
          erros.push(math.abs(fx(x1)))
          lnErros.push(math.log(math.abs(fx(x1)), math.e))
     }

     // retorna resultado
     renderTabela(iteracoes, raizes, fRaizes, erros, lnErros)
     renderGrafico(lnErros)
     return console.log(x1);
}
