package com.rayes.repository;

import com.rayes.model.Equip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EquipRepository extends JpaRepository<Equip, Long> {
    List<Optional<Equip>> findByName(String name);
    List<Optional<Equip>> findBySerialNumber(String serialNumber);
}
