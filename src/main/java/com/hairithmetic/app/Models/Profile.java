package com.hairithmetic.app.Models;
import jakarta.persistence.Entity;

@Entity
public class Profile extends AbstractEntity {


    private double currentLength;

    private String hairPorosity;

    private String howOily;

    private String howActive;

    public Profile() {
    }


    public double getCurrentLength() {
        return currentLength;
    }

    public void setCurrentLength(double currentLength) {
        this.currentLength = currentLength;
    }

    public String getHairPorosity() {
        return hairPorosity;
    }

    public void setHairPorosity(String hairPorosity) {
        this.hairPorosity = hairPorosity;
    }


    public String getHowOily() {
        return howOily;
    }

    public void setHowOily(String howOily) {
        this.howOily = howOily;
    }

    public String getHowActive() {
        return howActive;
    }

    public void setHowActive(String howActive) {
        this.howActive = howActive;
    }
}
