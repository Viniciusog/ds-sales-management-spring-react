package com.viniciusog.dssales.entities;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "tb_sellers")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    //mappedBy = Vai em Sale e pega todas as vendas que tiverem relação direta com este vendedor
    @OneToMany(mappedBy = "seller")
    private List<Sale> sales = new ArrayList<>();
}
