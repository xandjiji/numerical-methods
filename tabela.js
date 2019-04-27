function renderTabela(iteracoes, raizes, fRaizes, erros, lnErros){
     let html = "<table>";

     html += "<tr>";

     html += "<th>#</th>";
     html += "<th>Xn</th>";
     html += "<th>f(Xn)</th>";
     html += "<th>Erro</th>";
     html += "<th>ln(Erro)</th>";

     html += "</tr>";

     for(let i = 0; i < iteracoes.length; i++){
          html += "<tr>";

          html += "<td>" + iteracoes[i] + "</td>";
          html += "<td>" + raizes[i] + "</td>";
          html += "<td>" + fRaizes[i] + "</td>";
          html += "<td>" + erros[i] + "</td>";
          html += "<td>" + lnErros[i] + "</td>";

          html += "</tr>";
     }

     html += "</table>";


     document.getElementById("tabela").innerHTML = html;
}
