package com.hairithmetic.app.Models;

import jakarta.persistence.Entity;

@Entity
public class StyleLog extends AbstractEntity {

    private String date;

    private boolean hairWashed;

    private String products;

    private boolean heatStyled;

    private boolean dryShampooUsed;

    public StyleLog() {
    }

    public StyleLog(String date, boolean hairWashed, String products, boolean heatStyled, boolean dryShampooUsed) {
        this.date = date;
        this.hairWashed = hairWashed;
        this.products = products;
        this.heatStyled = heatStyled;
        this.dryShampooUsed = dryShampooUsed;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isHairWashed() {
        return hairWashed;
    }

    public void setHairWashed(boolean hairWashed) {
        this.hairWashed = hairWashed;
    }

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    public boolean isHeatStyled() {
        return heatStyled;
    }

    public void setHeatStyled(boolean heatStyled) {
        this.heatStyled = heatStyled;
    }

    public boolean isDryShampooUsed() {
        return dryShampooUsed;
    }

    public void setDryShampooUsed(boolean dryShampooUsed) {
        this.dryShampooUsed = dryShampooUsed;
    }
}
