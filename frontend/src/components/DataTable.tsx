import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "./Pagination";

function DataTable() {

    //O valor padrão para o número da página ativada é 0
    const [activePage, setActivePage] = useState(0)

    //É o resultado da requisição de paginação de Sales
    const [page, setPage] = useState<SalePage>({
        //Além desses atributos obrigatórios, tem também o content e outros não obrigatórios, definidos em SalePage
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    //O use effect carregará inicialmente e todas as vezes que o activePage mudar também
    useEffect(() => {
        //getAllSales, porém com paginação
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then((response) => {
                //Estamos pegando o corpo da resposta e adicionando no 'page', já que o tipo 'SalePage' 
                //contém tudo o que a nossa api java retorna na response
                setPage(response.data)
            })
    }, [activePage])

    //Função que alterará o nosso objeto activePage de acordo com um id passado por parâmetro
    function changePage(index: number) {
        setActivePage(index)
    }

    //RETORNANDO O CONTEÚDO HTML QUE SERÁ MOSTRADO NO NOSSO COMPONENTE DataTable
    return (
        <>
        {/*Estamos passando como parâmetro o objeto da response (page) e a função 'changePage' para o atributo onPageChange */}
        {/*Dessa forma, podemos chamar a função changePage dentro do componente 'Pagination' */}
        <Pagination page={page} onPageChange={changePage}/>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //Pega o conteúdo (lista de sales) de Page e para cada item, 
                        //escreve o html de acordo com o conteúdo
                        //content? => Caso o atributo content esteja definido
                        page.content?.map(item => (
                            <tr key={item.id /*O react precisa de um id único para renderizar uma coleção html*/}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.sellerDTO.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2) /*Imprimir com duas casas decimais*/}</td> 
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
        </>
    )
}

export default DataTable;