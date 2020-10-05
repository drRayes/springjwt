package com.rayes.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity(name = "quantity")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Quantity.class)
public class Quantity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "quantity_id")
    private Long id;

    @Column
    private Long sum;

    @OneToOne
    @JoinColumn(name = "location")
    private Location location;

    //@JsonManagedReference
    @OneToOne
    @JoinColumn(name = "equip")
    private Equip equip;

    public Quantity() {

    }

    public Quantity(Long sum, Location location, Equip equip) {
        setSum(sum);
        setLocation(location);
        setEquip(equip);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Equip getEquip() {
        return equip;
    }

    public void setEquip(Equip equip) {
        this.equip = equip;
    }

    public Long getSum() {
        return sum;
    }

    public void setSum(Long sum) {
        this.sum = sum;
    }

    @Override
    public String toString() {
        return getId() + " " + getEquip().getName() + " " + getLocation().getName() + " " + getSum();
    }
}
