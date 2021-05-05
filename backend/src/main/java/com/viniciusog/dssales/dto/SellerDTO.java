package com.viniciusog.dssales.dto;

import com.viniciusog.dssales.entities.Seller;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class SellerDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    //Estamos passando uma entidade Seller para SellerDTO
    //Enquanto tivermos usando uma entidade mapeada pelo JPA,
    //teremos a conexão do banco de dados aberta para realizar modificações,
    //e isso nós não queremos
    //Por isso iremos passar de Seller para SellerDTO
    public SellerDTO(Seller seller) {
        this.id = seller.getId();
        this.name = seller.getName();
    }
}
