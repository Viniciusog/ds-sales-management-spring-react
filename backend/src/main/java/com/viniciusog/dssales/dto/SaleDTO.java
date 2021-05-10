package com.viniciusog.dssales.dto;

import com.viniciusog.dssales.entities.Sale;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class SaleDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    //Quantidade de clientes visitados
    private Integer visited;
    //Quantidade de vendas feitas
    private Integer deals;
    private Double amount;
    private LocalDate date;

    //Aqui eu coloquei sellerDTO, por isso, no react eu tive que fazer da seguinte forma
    //para pegar o conteúdo da response
    /**
     * import { Seller } from "./seller"
     * //Objeto Sale
     * export type Sale = {
     *     id: number,
     *     visited: number,
     *     deals: number,
     *     amount: number,
     *     date: string,
     *     sellerDTO: Seller;
     * }
     */
    private SellerDTO sellerDTO;

    public SaleDTO(Sale sale) {
        this.id = sale.getId();
        this.visited = sale.getVisited();
        this.deals = sale.getDeals();
        this.amount = sale.getAmount();
        this.date = sale.getDate();
        this.sellerDTO = new SellerDTO((sale.getSeller()));
    }
}