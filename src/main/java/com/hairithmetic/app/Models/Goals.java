package com.hairithmetic.app.Models;

import jakarta.persistence.Entity;

@Entity
public class Goals extends AbstractEntity{
    private String frequencyOfHairWashing;

    private double goalLength;

    private boolean improveFrizz;

    private boolean useMoreNaturalProducts;

    private boolean avoidHeatStyling;

    private boolean avoidSilicones;

    private boolean avoidSulfates;

    public Goals() {
    }

    public Goals(String frequencyOfHairWashing, double goalLength, boolean improveFrizz, boolean useMoreNaturalProducts, boolean avoidHeatStyling, boolean avoidSilicones, boolean avoidSulfates) {
        this.frequencyOfHairWashing = frequencyOfHairWashing;
        this.goalLength = goalLength;
        this.improveFrizz = improveFrizz;
        this.useMoreNaturalProducts = useMoreNaturalProducts;
        this.avoidHeatStyling = avoidHeatStyling;
        this.avoidSilicones = avoidSilicones;
        this.avoidSulfates = avoidSulfates;
    }

    public String getFrequencyOfHairWashing() {
        return frequencyOfHairWashing;
    }

    public void setFrequencyOfHairWashing(String frequencyOfHairWashing) {
        this.frequencyOfHairWashing = frequencyOfHairWashing;
    }

    public double getGoalLength() {
        return goalLength;
    }

    public void setGoalLength(double goalLength) {
        this.goalLength = goalLength;
    }

    public boolean isImproveFrizz() {
        return improveFrizz;
    }

    public void setImproveFrizz(boolean improveFrizz) {
        this.improveFrizz = improveFrizz;
    }

    public boolean isUseMoreNaturalProducts() {
        return useMoreNaturalProducts;
    }

    public void setUseMoreNaturalProducts(boolean useMoreNaturalProducts) {
        this.useMoreNaturalProducts = useMoreNaturalProducts;
    }

    public boolean isAvoidHeatStyling() {
        return avoidHeatStyling;
    }

    public void setAvoidHeatStyling(boolean avoidHeatStyling) {
        this.avoidHeatStyling = avoidHeatStyling;
    }

    public boolean isAvoidSilicones() {
        return avoidSilicones;
    }

    public void setAvoidSilicones(boolean avoidSilicones) {
        this.avoidSilicones = avoidSilicones;
    }

    public boolean isAvoidSulfates() {
        return avoidSulfates;
    }

    public void setAvoidSulfates(boolean avoidSulfates) {
        this.avoidSulfates = avoidSulfates;
    }
}
