package com.viniciusog.dssales.repositories;

import com.viniciusog.dssales.dto.SaleSuccessDTO;
import com.viniciusog.dssales.dto.SaleSumDTO;
import com.viniciusog.dssales.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
    //OBS: amount é o nome que tem em Sale e Seller é o nome da nossa entidade
    @Query("SELECT new com.viniciusog.dssales.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) " +
            " FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupedBySeller();


    @Query("SELECT new com.viniciusog.dssales.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) " +
            " FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupedBySeller();

}
