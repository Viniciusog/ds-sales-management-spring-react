import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

//É o tipo de cada objeto do array series
type SeriesData = {
    name: string,
    data: number[]
}

//Dados do nosso gráfico de barras
type ChartData = {
    labels: {
        categories: string[]
    },
    series: SeriesData[]
}

function BarChart() {
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            //Legenda de cada barra
            categories: []
        },
        // O valor de cada barra
        series: [
            {
                name: "", //% de sucesso
                data: []  //56,78, 23, 98
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then((response) => {
                //Cast dos dados para o tipo SaleSuccess
                const data = response.data as SaleSuccess[]
                const myLabels = data.map(obj => obj.sellerName)
                //Estamos pegando a porcentagem (vendas/visitas * 100) e arredondando para uma casa decimal
                const mySeries = data.map(obj => round(obj.deals / obj.visited * 100, 1))
                
                //categories: Nome do funciopnário
                //series: A porcentagem de sucesso (Vendas / Visitas) para cada funcionário
                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [ 
                        {
                            name: "% success",
                            data: mySeries   
                        }
                    ]
                })
            })
    }, [])

    /**Aqui diz apenas que o nosso gráfico de barras será na horizontal */
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (

        <Chart options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChart;