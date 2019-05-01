function newton(x0){

     // dados da tabela
     var iteracoes = [];
     var raizes = [];
     var fRaizes = [];
     var erros = [];
     var lnErros = [];
     var iteracao = 0;

     // testa se o x0 eh valido
     if(fx(x0) * fxdd(x0) < 0){
          return console.log('ERRO: má escolha de x0');
     }

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x0)) > erro){
          x0 = (x0 - (fx(x0) / fxd(x0)))

          // atualizando tabela
          iteracao++
          iteracoes.push(iteracao)
          raizes.push(x0)
          fRaizes.push(fx(x0))
          erros.push(math.abs(fx(x0)))
          lnErros.push(math.log(math.abs(fx(x0)), math.e))
     }

     // retorna resultado
     renderTabela(iteracoes, raizes, fRaizes, erros, lnErros)
     renderGrafico(lnErros)
     return console.log(x0);

}
