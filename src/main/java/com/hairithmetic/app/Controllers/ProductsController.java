package com.hairithmetic.app.Controllers;

import com.hairithmetic.app.Data.ProductsRepository;
import com.hairithmetic.app.Models.Products;
import com.hairithmetic.app.Models.StyleLog;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/hairithmetic/products")
public class ProductsController {

    private final ProductsRepository productsRepository;

    public ProductsController(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @GetMapping
    public List<Products> getProducts() {
        return (List<Products>) productsRepository.findAll();
    }


    @GetMapping("/{id}")
    public Products getProduct(@PathVariable int id) {
        return productsRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createProduct(@RequestBody Products products) throws URISyntaxException {
        Products savedProduct = productsRepository.save(products);
        return ResponseEntity.created(new URI("/hairithmetic/products/" + savedProduct.getId())).body(savedProduct);
    }

    //will allow us to update/edit an activity
    @PutMapping("/{id}")
    public ResponseEntity updateStyleLog(@PathVariable int id, @RequestBody Products product) {
        Products currentProduct= productsRepository.findById(id).orElseThrow(RuntimeException::new);
        currentProduct.setNameOfProduct(product.getNameOfProduct());
        currentProduct.setNotes(product.getNotes());
        currentProduct.setDateUsed(product.getDateUsed());
        currentProduct.setWillPurchaseAgain(product.isWillPurchaseAgain());
        productsRepository.save(currentProduct);
        return ResponseEntity.ok(currentProduct);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct(@PathVariable int id) {
        productsRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
