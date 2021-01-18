package com.rayes.service;

import com.rayes.exception.EquipNotEnoughException;
import com.rayes.model.Equip;
import com.rayes.model.EquipWaybill;
import com.rayes.model.Location;
import com.rayes.model.Quantity;
import com.rayes.repository.EquipWaybillRepository;
import com.rayes.repository.QuantityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Service
public class EquipService {
    public static final Logger LOGGER = Logger.getLogger(EquipService.class.getName());
    @Autowired
    EquipWaybillRepository equipWaybillRepository;

    @Autowired
    QuantityRepository quantityRepository;

    public Equip moveEquipTo(EquipWaybill equipWaybill) {
        LOGGER.info("MOVE EQUIP " + equipWaybill.getEquip() + " from "
                + equipWaybill.getSourceLocation() + " to " + equipWaybill.getDestination());

        equipWaybill.setWaybillNumber(LocalDateTime.now().toString());

        Quantity quantity;

        if (equipWaybill.getEquip().getQuantity().size() < 1) {
            LOGGER.info("!NEW QUANTITY IN DESTINATION");
            quantityRepository.save(new Quantity(equipWaybill.getQuantity(), equipWaybill.getDestination(),
                    equipWaybill.getEquip()));
            equipWaybill.setSourceLocation(equipWaybill.getDestination());
            return equipWaybillRepository.save(equipWaybill).getEquip();
        } else {
            HashMap<Integer, Quantity> quantityHashMap = this.prepareQuantityHashMap(equipWaybill.getEquip().getQuantity());

            if (equipWaybill.getSourceLocation() != null && equipWaybill.getSourceLocation().getId() != null) {
                quantity = quantityHashMap.get(equipWaybill.getSourceLocation().getId());
                if (quantity != null && quantity.getSum() >= equipWaybill.getQuantity()) {
                    quantity.setSum(quantity.getSum() - equipWaybill.getQuantity());
                    quantityRepository.save(quantity);
                } else {
                    throw new EquipNotEnoughException();
                }
            } else {
                equipWaybill.setSourceLocation(equipWaybill.getEquip().getLocation());
            }

            if (quantityHashMap.get(equipWaybill.getDestination().getId()) != null) {
                quantity = quantityHashMap.get(equipWaybill.getDestination().getId());
                quantity.setSum(quantity.getSum() + equipWaybill.getQuantity());
                quantityRepository.save(quantity);
            } else {
                LOGGER.info("NEW QUANTITY IN DESTINATION!");
                quantityRepository.save(new Quantity(equipWaybill.getQuantity(), equipWaybill.getDestination(),
                        equipWaybill.getEquip()));
            }
        }

        return equipWaybillRepository.save(equipWaybill).getEquip();
    }

    public HashMap<Integer, Quantity> prepareQuantityHashMap(Set<Quantity> quantitySet) {
        LOGGER.info("preparing quantity hash map from set size " + quantitySet.size());
        HashMap<Integer, Quantity> hashMap = new HashMap<>();
        quantitySet.stream().forEach(quantity -> {
            hashMap.put(quantity.getLocation().getId(), quantity);
        });
        return hashMap;
    }

    public List<Optional<Quantity>> getMinimalBalance(Location location) {
        LOGGER.info("getting minimal balance from location - " + location.getName());
        List<Optional<Quantity>> quantityList = quantityRepository.findByLocation(location);
        if(quantityList != null) {
//            quantityList.stream().forEach(quantity -> {
//                if(quantity.get().getSum() > quantity.get().getEquip().getMinimalCount()) {
//                    quantityList.remove(quantity);
//                }
//            });
            quantityList.stream()
                    .filter(quantity -> quantity.get().getSum() >= quantity.get().getEquip().getMinimalCount())
                    .collect(Collectors.toList());
        }
        return quantityList;
    }

}
