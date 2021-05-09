import Chart from 'react-apexcharts'
//AXIOS REALIZA EXECUTA MÉTODOS HTTPS (get post put, delete etc)
import axios from 'axios'
import {BASE_URL} from "../utils/requests"
import { SaleSum } from 'types/sale'


//Dados do gráfico
type ChartData = {
    labels: string[];
    series: number[]
}

function DonutChart () {
    //FORMA ERRADA
    //Estamos instanciando uma variável de tipo ChartData e colocando os valores de labels e series como [], por padrão
    let chartData: ChartData = {labels: [], series: []}

    //FORMA ERRADA
    //response.data() é o corpo da resposta
    //Por padrão, as requisições feitas pelo AXIOS são ASSÍNCRONAS, ou seja:
    //A nossa aplicação continuará funcionando normalmente até que o resultados seja carregado com sucesso pelo axios
    //Por isso, temos que usar  'then' para executar uma função quando o axios carregar a response com sucesso
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((response) => {
            //Cast dos dados para o tipo SaleSum
            const data = response.data as SaleSum[]
            const myLabels = data.map(obj => obj.sellerName)
            const mySeries = data.map(obj => obj.sum)

            //Passando os valores do banco de dados para o nosso objeto chartData
            chartData = {labels: myLabels, series: mySeries}

            console.log(chartData)
        })
    /*Soma total de vendas por vendedor
    const mockData = {
        //Valor de cada parte do gráfico de Donut
        series: [477138, 499928, 444867, 220426, 473088],
        //Legenda para cada um dos valores do gráfico de Donut
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }*/
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: chartData.labels}}
        series={chartData.series}
        type="donut"
        height="240"
    />
    );
}

export default DonutChart;