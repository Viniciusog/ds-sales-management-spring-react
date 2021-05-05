package com.viniciusog.dssales.entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table (name = "tb_sales")
//Dados de venda de um determinado cliente
public class Sale {

    @Id
    //auto incrementável
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //Quantidade de clientes visitados
    private Integer visited;
    //Quantidade de vendas feitas
    private Integer deals;
    private Double amount;
    private LocalDate date;

    @ManyToOne
    //Diz qual será o nome da chave estrangeira
    @JoinColumn(name = "seller_id")
    private Seller seller;
}