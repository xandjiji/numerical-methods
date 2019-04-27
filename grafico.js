function renderGrafico(iteracao, lnErros){

     var config = {
          type: 'line',
          data: {
               labels: iteracao,
               datasets: [{
                    label: 'ln(Erro)',
                    data: lnErros,
                    backgroundColor: 'rgba(255, 255, 255)',
                    borderColor:  'rgba(0, 0, 0)',
                    fill: false,
                    pointRadius: 3,
                    pointHoverRadius: 8,
               }]
          },
          options: {
               responsive: true,
               legend: {
                    position: 'bottom',
               },
               hover: {
                    mode: 'index'
               },
               scales: {
                    xAxes: [{
                         display: true,
                         scaleLabel: {
                              display: true,
                              labelString: 'Iteração'
                         }
                    }],
                    yAxes: [{
                         display: true,
                         scaleLabel: {
                              display: true,
                              labelString: 'ln(Erro)'
                         }
                    }]
               },
               title: {
                    display: true,
                    text: 'Variação do erro a cada iteração'
               }
          }
     };

     if(window.chart && window.chart !== null){
          window.chart.destroy();
     }

     Chart.defaults.global.defaultFontColor = 'white';
     var myChart = document.getElementById('myChart').getContext('2d');
     window.chart = new Chart(myChart, config);
}
