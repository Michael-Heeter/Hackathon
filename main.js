const aChart = document.getElementById('myChart').getContext('2d')

let gradient = aChart.createLinearGradient(0,0,0,400)
gradient.addColorStop(0, 'rgba(58,123,213,1')
gradient.addColorStop(1, 'rgba(0,210,255,0.3')

const data = {
  labels: ['Japan', 'Ukraine', 'Germany', 'UK','Italy','France','Brazil','Russia','China','USA'],
  datasets: [{
    label: 'Population of Cats',
    data: [7.25, 7.5, 7.75,7.75,9.5,9.5,12.5,12.75,53,76.5],
    fill: true,
    backgroundColor: gradient,
    borderColor: 'grey',
    pointBackgroundColor: 'red',
    borderWidth: 1.5,
    borderJoinStyle: 'miter'
  }]
};

const myChart = new Chart(aChart, {
  type: 'line',
  data: data,
  options: {
    radius: 5,
    hitRadius: 60,
    responsive: true,
    scales:{
        y:{
            ticks:{
                callback: function(value){
                    return value + ' million';
                }
            }
        }
    },
    plugins:{
        legend:{
            labels:{
                font:{
                    family: 'Helvetica',
                    size: 16,
                    style: 'italic',
                    weight: 'bold'
                }
            }
        }
    }
  }
});