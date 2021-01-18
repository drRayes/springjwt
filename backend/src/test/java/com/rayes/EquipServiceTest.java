package com.rayes;

import com.rayes.model.Equip;
import com.rayes.model.EquipWaybill;
import com.rayes.model.Location;
import com.rayes.model.Quantity;
import com.rayes.repository.EquipRepository;
import com.rayes.repository.EquipWaybillRepository;
import com.rayes.repository.LocationRepository;
import com.rayes.repository.QuantityRepository;
import com.rayes.service.EquipService;
import junit.framework.TestCase;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;
import java.util.Optional;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class EquipServiceTest extends TestCase {
    @Autowired
    private QuantityRepository quantityRepository;
    @Autowired
    private EquipWaybillRepository equipWaybillRepository;
    @Autowired
    private EquipRepository equipRepository;
    @Autowired
    private LocationRepository locationRepository;
    @Autowired
    private EquipService equipService;

    @Before
    public void setUp() throws Exception {
        super.setUp();
        Location testLocation = new Location();
        testLocation.setName("testLocation");
        locationRepository.save(testLocation);

        Location testDestination = new Location();
        testDestination.setName("testDestination");
        locationRepository.save(testDestination);

        Equip equip = new Equip();
        equip.setName("testEquip");
        equip.setSerialNumber("testSerialNumber");
        equip.setMinimalCount(0);
        equip.setLocation(testLocation);
        equipRepository.save(equip);

        Equip secondEquip = new Equip();
        secondEquip.setName("secondTestEquip");
        secondEquip.setSerialNumber("secondTestSerialNumber");
        secondEquip.setMinimalCount(2);
        equipRepository.save(secondEquip);
    }

    @After
    public void tearDown() throws Exception {
        super.tearDown();

        //equipWaybillRepository.deleteAll();

        equipWaybillRepository.findByCommentStartsWith("test").stream().forEach(
                optionalEquipWaybill -> {
                    equipWaybillRepository.delete(optionalEquipWaybill.get());
                }
        );

        List<Equip> list =  equipRepository.findAll();
        list.stream().forEach(optional -> {
            if(optional.getName().toLowerCase().contains("test")) {
//                optional.getQuantity().stream().forEach(quantity -> quantityRepository.delete(quantity));
                equipRepository.delete(optional);
            }
        });


        List<Location> locationsList = locationRepository.findAll();
        locationsList.stream().forEach(location -> {
            if(location.getName().toLowerCase().contains("test")) {
                locationRepository.delete(location);
            }
        });

    }

    @Test
    public void checkingOfAvailabilityTestEquip() {
        List<Optional<Equip>> equipList = equipRepository.findByName("testEquip");
        Equip equip = equipList.get(0).get();
        System.out.println(equip.getId() + " " + equip.getName() + " " + equip.getLocation().getName());
        assertEquals("testSerialNumber", equip.getSerialNumber());
    }

    @Test
    public void whenMoveWithIndicatingLocationQuantityShouldIncrease() {
        //When
        Equip equip = equipRepository.findByName("testEquip").get(0).get();

        Location testDestination = locationRepository.findByName("testDestination").get(0).get();

        //Add equip to location
        EquipWaybill equipWaybill = new EquipWaybill();
        equipWaybill.setComment("testWaybillAnotherOne");
        equipWaybill.setEquip(equip);
        equipWaybill.setDestination(equip.getLocation());
        equipWaybill.setQuantity(5l);

        equipService.moveEquipTo(equipWaybill);

        equip = equipRepository.findByName("testEquip").get(0).get();

        //Get amount on test location
        Long amountBeforeMovingFromTestLocation = quantityRepository.findByLocation(equip.getLocation()).get(0).get().getSum();

        //Move equip from to test location
        equipWaybill.setComment("test");
        equipWaybill.setEquip(equip);
        equipWaybill.setSourceLocation(null);
        equipWaybill.setDestination(equip.getLocation());
        equipWaybill.setQuantity(4l);

        equipService.moveEquipTo(equipWaybill);

        List<Optional<Quantity>> quantityList = quantityRepository.findByLocation(equip.getLocation());

        Long amountAfterMovingFromTestLocation = quantityRepository.findByLocation(equip.getLocation()).get(0).get().getSum();

        assertTrue(amountBeforeMovingFromTestLocation < amountAfterMovingFromTestLocation);
    }

    @Test
    public void afterMovingEquipFromCertainLocationThereQuantityShouldDecrease(){
        //When
        Equip equip = equipRepository.findByName("testEquip").get(0).get();

        Location testDestination = locationRepository.findByName("testDestination").get(0).get();

        //Add equip to location
        EquipWaybill equipWaybill = new EquipWaybill();
        equipWaybill.setComment("testWaybillAnotherOne");
        equipWaybill.setEquip(equip);
        equipWaybill.setDestination(equip.getLocation());
        equipWaybill.setQuantity(5l);

        equipService.moveEquipTo(equipWaybill);

        equip = equipRepository.findByName("testEquip").get(0).get();

        //Get amount on test location
        Long amountBeforeMovingFromTestLocation = quantityRepository.findByLocation(equip.getLocation()).get(0).get().getSum();

        //Move equip from test loc to test destination
        equipWaybill.setComment("test");
        equipWaybill.setEquip(equip);
        equipWaybill.setSourceLocation(equip.getLocation());
        equipWaybill.setDestination(testDestination);
        equipWaybill.setQuantity(4l);

        equipService.moveEquipTo(equipWaybill);

        List<Optional<Quantity>> quantityList = quantityRepository.findByLocation(equip.getLocation());

        Long amountAfterMovingFromTestLocation = quantityRepository.findByLocation(equip.getLocation()).get(0).get().getSum();

        assertTrue(amountBeforeMovingFromTestLocation > amountAfterMovingFromTestLocation);
    }


}
