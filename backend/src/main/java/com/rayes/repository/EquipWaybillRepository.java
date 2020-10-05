package com.rayes.repository;

import com.rayes.model.EquipWaybill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipWaybillRepository extends JpaRepository<EquipWaybill, Long> {
}
