package com.viniciusog.dssales.dto;

import com.viniciusog.dssales.entities.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class SaleSumDTO implements Serializable {
    /**
     * OBJETO QUE SERÁ RETORNADO EM /sales/amount-by-seller
     * {
     *     "sellerName": "BarryAllen",
     *     "sum": 65489.7
     * }
     */
    private static final long serialVersionUID = 1L;
    private String sellerName;
    private Double sum;


    //No PostgreSQL não tem como agrupar por nome de Seller
    public SaleSumDTO(Seller seller, Double sum) {
        this.sellerName = seller.getName();
        this.sum = sum;
    }

}
