package com.hairithmetic.app.Models;
import jakarta.persistence.Entity;

@Entity
public class Goals extends AbstractEntity {

    private double goalLength;
    private double currentLength;

    private String hairPorosity;

    private String howOftenWash;

    private String howOily;

    private String howActive;

    public Goals() {
    }

    public double getGoalLength() {
        return goalLength;
    }

    public void setGoalLength(double goalLength) {
        this.goalLength = goalLength;
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

    public String getHowOftenWash() {
        return howOftenWash;
    }

    public void setHowOftenWash(String howOftenWash) {
        this.howOftenWash = howOftenWash;
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
