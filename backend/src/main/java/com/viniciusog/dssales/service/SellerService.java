package com.viniciusog.dssales.service;

import com.viniciusog.dssales.dto.SellerDTO;
import com.viniciusog.dssales.entities.Seller;
import com.viniciusog.dssales.repositories.SellerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SellerService {

    private final SellerRepository sellerRepository;

    public List<SellerDTO> findAll() {
        List<Seller> sellers = sellerRepository.findAll();
        //Estamos passando cada seller de sellers, para sellerDTO e em seguida retornando essa lista
        return sellers.stream().map(s -> new SellerDTO(s)).collect(Collectors.toList());
    }
}
