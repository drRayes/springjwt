package com.rayes.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Entity(name = "equip")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id",
        scope = Equip.class)
public class Equip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "equip_id")
    private Long id;

    @Column
    private String name;

    @Column
    private String serialNumber;

    @Column
    private Integer minimalCount;

//    @JsonBackReference
    @OneToMany(mappedBy = "equip", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Quantity> quantity = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "location")
    private Location location;

    @Transient
    private HashMap<Location, Quantity> quantityHashMap;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Integer getMinimalCount() {
        return minimalCount;
    }

    public void setMinimalCount(Integer minimalCount) {
        this.minimalCount = minimalCount;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Set<Quantity> getQuantity() {
        return quantity;
    }

    public void setQuantity(Set<Quantity> quantity) {
        this.quantity = quantity;
    }

    @JsonIgnore
    public HashMap<Location, Quantity> getQuantityHashMap() {
        return quantityHashMap;
    }

    public void setQuantityHashMap(HashMap<Location, Quantity> quantityHashMap) {
        this.quantityHashMap = quantityHashMap;
    }
}
