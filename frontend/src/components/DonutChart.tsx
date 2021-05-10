
//AXIOS REALIZA EXECUTA MÉTODOS HTTPS (get post put, delete etc)
import axios from 'axios'
import Chart from 'react-apexcharts'
import { BASE_URL } from "../utils/requests"
import { SaleSum } from 'types/sale'
import { useEffect, useState } from 'react'


//Tipo dos dados do gráfico
type ChartData = {
    labels: string[];
    series: number[]
}

function DonutChart() {
    //chartData => Nome do nosso objeto
    //setChartData => Nome da função que mudará o valor do nosso objeto chartData
    //<ChartData> => Tipo padrão do nosso objeto
    //({labels: [], series: []}) => Nome dos atributos e valores iniciais que nosso objeto terá
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })


    //Tem dois parâmetros, o primeiro é a função que irá executar e o segundo é o objeto que será sempre escutado
    //Se o objeto que for executado, nunca muda, então iremos executar a função do primeiro parâmetro apenas
    useEffect(() => {
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
                /*
                APESAR DE CARREGAR AS RESPOSTAS DA REQUISIÇÃO E COLOCAR NA VARIÁVEL chartData,
                O REACT CARREGA O GRÁFICO RAPIDAMENTE E NÃO ATUALIZA O GRÁFICO QUANDO A RESPONSE ESTÁ
                PRONTA, por causa do assíncrono. 
    
                SENDO ASSIM, TEMOS QUE USAR useState PARA QUE O REACT POSSA IDENTIFICAR O ESTADO DO NOSSO OBJETO
                E ASSIM ATUALIZAR O GRÁFICO QUANDO A RESPONSE CARREGAR
    
                useState: Um único objeto para todo o ciclo de vida do REACT. O objeto é constante mas seus dados podem
                ser alterados*/
                setChartData({ labels: myLabels, series: mySeries })

                console.log(chartData)
            })
    }, [])

  
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;