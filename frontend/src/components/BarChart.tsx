import Chart from 'react-apexcharts'

function BarChart () {

    /**Aqui diz apenas que o nosso gráfico de barras será na horizontal */
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    //Aqui temos os dados 'mockados'. Labels significa 'O que é' cada uma das barras
    //Series é o valor que cada barra irá receber, nesse caso, vai de 0% a 100%
    const mockData = {
        // Legenda de cada barra
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        // O valor de cada barra
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (

        <Chart options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChart;