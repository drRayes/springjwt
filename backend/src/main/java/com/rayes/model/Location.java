package com.rayes.model;

import javax.persistence.*;

@Entity(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Integer id;

    @Column
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Location) {
            if (this.getId().equals(((Location) o).getId())) {
                return true;
            }
        }
        return false;
    }

    @Override
    public int hashCode() {
        return  this.getId();
    }
}
