function renderGrafico(lnErros){

     if(window.myScatter && window.myScatter !== null){
          window.myScatter.destroy();
     }

     function generateData() {
          var data = [];
          for (var i = 0; i < (lnErros.length - 1); i++) {
               data.push({
                    x: lnErros[i+1],
                    y: lnErros[i]
               });
          }

          return data;
     }

     dataset = generateData();

     var scatterChartData = {
          datasets: [{
               label: 'ln(en) × ln(en+1)',
               borderColor: 'rgba(0, 0, 0)',
               backgroundColor: 'rgba(255, 255, 255)',
               data: dataset
          }]
     };

     var ctx = document.getElementById('myChart').getContext('2d');
     Chart.defaults.global.defaultFontColor = 'white';

     window.myScatter = Chart.Scatter(ctx, {
          data: scatterChartData,
          options: {
               title: {
                    display: true
               },
               scales: {
          			xAxes: [{
          				type: 'linear',
          				position: 'bottom',
                              ticks: {
                                reverse: true
                              },
          				scaleLabel: {
          					labelString: 'ln(en)',
          					display: true,
          				}
          			}],
          			yAxes: [{
          				type: 'linear',
          				scaleLabel: {
          					labelString: 'ln(en+1)',
          					display: true
          				}
          			}]
          		}
          }
     });


}
