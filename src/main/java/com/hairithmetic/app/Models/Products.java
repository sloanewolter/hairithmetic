package com.hairithmetic.app.Models;

import jakarta.persistence.Entity;

@Entity
public class Products {

    private String nameOfProduct;

    private String dateUsed;

    private String notes;

    private boolean willPurchaseAgain;

    public Products() {
    }

    public Products(String nameOfProduct, String dateUsed, String notes, boolean willPurchaseAgain) {
        this.nameOfProduct = nameOfProduct;
        this.dateUsed = dateUsed;
        this.notes = notes;
        this.willPurchaseAgain = willPurchaseAgain;
    }

    public String getNameOfProduct() {
        return nameOfProduct;
    }

    public void setNameOfProduct(String nameOfProduct) {
        this.nameOfProduct = nameOfProduct;
    }

    public String getDateUsed() {
        return dateUsed;
    }

    public void setDateUsed(String dateUsed) {
        this.dateUsed = dateUsed;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public boolean isWillPurchaseAgain() {
        return willPurchaseAgain;
    }

    public void setWillPurchaseAgain(boolean willPurchaseAgain) {
        this.willPurchaseAgain = willPurchaseAgain;
    }
}
