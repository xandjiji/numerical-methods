function ponto_fixo(x0){

     // dados da tabela
     var iteracoes = [];
     var raizes = [];
     var fRaizes = [];
     var erros = [];
     var lnErros = [];
     var iteracao = 0;

     // iterar ate que o o resultado fique menor que o erro
     while(math.abs(fx(x0)) > erro){
          x0 = phi(x0)

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
