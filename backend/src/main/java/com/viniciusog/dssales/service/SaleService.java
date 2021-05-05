package com.viniciusog.dssales.service;

import com.viniciusog.dssales.dto.SaleDTO;
import com.viniciusog.dssales.dto.SaleSuccessDTO;
import com.viniciusog.dssales.dto.SaleSumDTO;
import com.viniciusog.dssales.entities.Sale;
import com.viniciusog.dssales.repositories.SaleRepository;
import com.viniciusog.dssales.repositories.SellerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleService {

    /* Podemos acessar a paginação pela URL:
    http://localhost:8080/sales?page=1(Pega os primeiros 20 valores)
    http://localhost:8080/sales?page=1&size=10 (Pega os elementos do 10 ao 20)
    http://localhost:8080/sales?page=1&size=10&sort=date (Ordena pela data mais velha para a mais nova)
    http://localhost:8080/sales?page=1&size=10&sort=date,desc (Ordena pela data mais nova para a mais velha)
    */
    private final SaleRepository saleRepository;

    //Nosso programa está fazendo o seguinte:
    //Toda vez que selecionamos as Sales, o jpa vai no banco e carrega o nosso Seller que
    //está relacionado com essa Sale. Se temos 5 Sellers e 100 Sales. O JPA
    //vai no banco 5 vezes para pegar os Selles. (Feito isso ele guarda na memória (cash))
    private final SellerRepository sellerRepository;

    //O Spring controla pageable automaticamente
    //Page é apenas Stream com nome diferente,

    //@Transaction = Toda a operação com o banco seja resolvida aqui no service
    //readOnly = Não fazer lock no banco
    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        //Estamos pegando todos os Sellers para guardar na memória (CASH)
        sellerRepository.findAll();
        Page<Sale> result = saleRepository.findAll(pageable);
        //Transforma cada Sale de result para SaleDTO. Page já é uma Stream
        return result.map(sale -> new SaleDTO(sale));
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller() {
        //Já retorna a soma das vendas agrupadas pelo nome de cada vendedor
        return saleRepository.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller() {
        //Retorna a soma de todas as visitas e vendas agrupadas pelo nome de cada vendedor
        return saleRepository.successGroupedBySeller();
    }
}

