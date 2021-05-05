import Chart from 'react-apexcharts'

function DonutChart () {

    const mockData = {
        //Valor de cada parte do gráfico de Donut
        series: [477138, 499928, 444867, 220426, 473088],
        //Legenda para cada um dos valores do gráfico de Donut
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: mockData.labels}}
        series={mockData.series}
        type="donut"
        height="240"
    />
    );
}

export default DonutChart;