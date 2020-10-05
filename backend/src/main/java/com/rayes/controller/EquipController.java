package com.rayes.controller;

import com.rayes.model.Equip;
import com.rayes.model.EquipWaybill;
import com.rayes.model.Location;
import com.rayes.model.Quantity;
import com.rayes.repository.EquipRepository;
import com.rayes.repository.LocationRepository;
import com.rayes.repository.QuantityRepository;
import com.rayes.security.service.EquipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/equip")
public class EquipController {
     public final Logger LOGGER = Logger.getLogger(EquipController.class.getName());


    @Autowired
    EquipRepository equipRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    EquipService equipService;

    @GetMapping("/loadLocations")
    public List<Location> loadLocations() {
        LOGGER.info(" load locations");
        return locationRepository.findAll();
    }

    @PostMapping("/createLocation")
    public Location createLocation(@RequestBody Location location) {
        LOGGER.info(" create location " + location.getName());
        return locationRepository.save(location);
    }

    @PostMapping("/createEquip")
    public Equip createEquip(@RequestBody Equip equip) {
        LOGGER.info(" create equip " + equip.getName());
        return equipRepository.save(equip);
    }

    @GetMapping("/searchByName/{name}")
    public List<Optional<Equip>> searchByName(@PathVariable String name) {
        LOGGER.info(" search equip by name " + name);
        return equipRepository.findByName(name);
    }

    @GetMapping("/searchBySerialNumber/{serialNumber}")
    public List<Optional<Equip>> searchBySerialNumber(@PathVariable String serialNumber) {
        LOGGER.info(" search equip by serial number " + serialNumber);
        return equipRepository.findBySerialNumber(serialNumber);
    }

    @PostMapping("/updateEquip")
    public Equip updateEquip(@RequestBody Equip equip) {
        LOGGER.info(" updating equip " + equip.getName());
        return equipRepository.save(equip);
    }

    @GetMapping("/toConsole/{text}")
    public String toConsole(@PathVariable String text) {
        LOGGER.info(" to console ");
        System.out.println(text);
        return "all right " + text;
    }

    @PostMapping("/confirmWaybill")
    public Equip confirmWaybill(@RequestBody EquipWaybill equipWaybill) {
        LOGGER.info(" confirming waybill " + equipWaybill.getSourceLocation().getName()
            + equipWaybill.getDestination().getName());
        return equipService.moveEquipTo(equipWaybill);
    }

    @PostMapping("/getMinimalCountList")
    public List<Optional<Quantity>> getMinimalCountList(@RequestBody Location location) {
        LOGGER.info(" request for minimal count from location "  + location.getName());
        return equipService.getMinimalBalance(location);
    }

}
