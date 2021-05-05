package com.viniciusog.dssales.dto;

import com.viniciusog.dssales.entities.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SaleSuccessDTO implements Serializable {

    private final static long serialVersionUID = 1l;

    /**
     *  {
     *     "sellerName": "Logan",
     *     "visited": 1495,
     *     "deals": 684
     *  }
     */
    //Taxa de sucesso: deals/visited
    private String sellerName;
    private Long visited; //visitas
    private Long deals; //vendas

    public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
        this.sellerName = seller.getName();
        this.visited = visited;
        this.deals = deals;
    }
}