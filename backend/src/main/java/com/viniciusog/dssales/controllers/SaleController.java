package com.viniciusog.dssales.controllers;

import com.viniciusog.dssales.dto.SaleDTO;
import com.viniciusog.dssales.dto.SaleSuccessDTO;
import com.viniciusog.dssales.dto.SaleSumDTO;
import com.viniciusog.dssales.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")

@RequiredArgsConstructor
public class SaleController {

    private final SaleService saleService;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok().body(saleService.findAll(pageable));
    }

    @GetMapping(path = "/amount-by-seller")
    public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
        return ResponseEntity.ok().body(saleService.amountGroupedBySeller());
    }

    @GetMapping(path = "/success-by-seller")
    public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller() {
        return ResponseEntity.ok().body(saleService.successGroupedBySeller());
    }
}
