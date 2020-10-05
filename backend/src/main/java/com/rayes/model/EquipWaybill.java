package com.rayes.model;

import javax.persistence.*;
import java.util.List;

@Entity(name = "equip_waybill")
public class EquipWaybill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String waybillNumber;

    @JoinColumn(name = "equip")
    @OneToOne
    private Equip equip;

    @Column
    private Long quantity;

    @Column
    private String comment;

    @JoinColumn(name = "destination")
    @ManyToOne
    private Location destination;

    @JoinColumn(name = "source_location")
    @ManyToOne
    private Location sourceLocation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWaybillNumber() {
        return waybillNumber;
    }

    public void setWaybillNumber(String waybillNumber) {
        this.waybillNumber = waybillNumber;
    }

    public Equip getEquip() {
        return equip;
    }

    public void setEquip(Equip equip) {
        this.equip = equip;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Location getDestination() {
        return destination;
    }

    public void setDestination(Location destination) {
        this.destination = destination;
    }

    public Location getSourceLocation() {
        return sourceLocation;
    }

    public void setSourceLocation(Location sourceLocation) {
        this.sourceLocation = sourceLocation;
    }
}
