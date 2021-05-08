import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

/**
 * Este é o nosso componente principal do REACT.
 * Temos a função App que retorna um HTML. Como elea retorna um HTML, podemos utilizar
 * essa função como sendo um componente no REACT
 * 
 * [NAV BAR]
 * [
 *  Dashboard de vendas <h1>
 *  [ [ Taxa de sucesso (%) - Gráfico 1] [ Todas as vendas - Gráfico 2] ]
 *  Todas as vendas </h3>
 *  [TABELA]
 * ]
 * [FOOTER]
 * 
 */
function Dashboard() {
    return (
        /**Aqui dentro ficará todos os nossos componentes do DASHBOARD*/
        /* <> serve para que possamos retornar tags irmãs ao mesmo tempo*/
        /* o bootstrap divide cada div em 12 partes */
        <>
            <NavBar />
            {/* Como que fosse a main*/}
            <div className="container">
            <h1 className="text-primary py-3">Dashboard de vendas</h1>

            {/*Representa a div dos gráficos*/}
            <div className="row container px-3">

                {/*Representa a div do gráfico de barras*/}
                <div className="col-sm-6">
                <h5>Taxa de sucesso (%)</h5>
                <BarChart />
                </div>

                {/*Representa a div do gráfico de Donut*/}
                <div className="col-sm-6">
                <h5>Todas as vendas</h5>
                <DonutChart />
                </div>
            </div>
            
            <h3 className="text-primary py-3">Todas as vendas</h3>
            <DataTable /> 
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;