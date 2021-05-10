import { SalePage } from "types/sale";

//O nosso componente Pagination receberá algumas propriedades. Essas propriedades nós chamamos de props
//Além disso, quando o nosso usuário clicar para avançar ou voltar uma determinada página, temos que enviar 
//essa mudança para o nosso componente DataTable
type Props = {
    page: SalePage;
    onPageChange: Function;
}

//SHIFT + ALT + F  para identação do nosso código
//Recebe atributo 'page' que contém a página de DataTable
function Pagination( {page, onPageChange} : Props) {

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    {/*Se for a primeira página, coloca disabled no botão de anterior*/}
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        {/*Página anterior é: o número da página que estamos - 1 */}
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        {/*A página na nossa DataTable será o page.number + 1, pois começa em 0*/}
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        {/*Próxima página: é o número da página que estamos  + 1*/}
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;