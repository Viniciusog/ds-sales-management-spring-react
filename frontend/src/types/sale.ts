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