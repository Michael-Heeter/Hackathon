const aChart = document.getElementById('myChart').getContext('2d');



const data = {
  labels: ['Japan', 'Ukraine', 'Germany', 'UK','Italy','France','Brazil','Russia','China','USA'].reverse(),
  datasets: [{
    label: 'Population of Cats',
    data: [7250000, 7500000, 7750000,7750000,9500000,9500000,12500000,12750000,53000000,76500000].reverse(),
    backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(99,255,132,0.5)','rgba(132,255,255,0.5)','rgba(255,132,255,0.5)','rgba(132,99,255,0.5)','rgba(255,255,99,0.5)','rgba(255,99,255,0.5)','rgba(255,165,0,0.5)','rgba(0,128,0,0.5)','rgba(128,0,128,0.5)'],
    borderWidth: 0,
    borderJoinStyle: 'miter'
  }]
};

const myChart = new Chart(aChart, {
  type: 'pie',
  data: data,
  options: {

    responsive: true,
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