package com.hairithmetic.app.Models;
import jakarta.persistence.Entity;

@Entity
public class Goals {

    private double goalLength;
    private double currentLength;

    private String hairPorosity;

    private String howOftenWash;

    private String howOily;

    private String howActive;

    public Goals() {
    }


}
