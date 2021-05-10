//ESTE É NOSSO ARQUIVO DE TIPOS DE OBJETOS, QUE SERÃO UTILIZADOS PARA ORGANIZAR AS RESPONSES

import { Seller } from "./seller"
//Objeto Sale
//Na nossa API Java, retornei em SaleDTO, o atributo sellerDTO. Por conta de os atributos de Sale
//terem que ser identicos ao retornados pela API, tenho que colocar sellerDTO aqui também
export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    sellerDTO: Seller;
}

//Nossa página de Sale contém um array de Sale.
//A paginação retorna vários conteúdos, porém apenas precisamos dos descritos abaixo
export type SalePage = {
    //? => Opcional
    content?: Sale[],
    last: boolean,
    totalElements: number,
    totalPages: number,
    size?: number,
    number: number,
    first: boolean,
    numberOfElements?: number,
    empty?: boolean
}

//sellerName
//sum
//DEFINIMOS AQUI UM TIPO. SERÁ ESSE O TIPO DO RESULTADO RETORNADO QUANDO PEGARMOS A SOMA
//DAS VENDAS POR FUNCIONÁRIO
export type SaleSum = {
    sellerName: string,
    sum: number
}

//DEFINIMOS AQUI O TIPO QUE INDICA A TAXA DE SUCESSO POR NOME DE VENDEDOR
export type SaleSuccess = {
    sellerName: string,
    visited: number,
    deals: number
}

