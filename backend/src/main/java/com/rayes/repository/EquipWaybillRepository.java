package com.rayes.repository;

import com.rayes.model.EquipWaybill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EquipWaybillRepository extends JpaRepository<EquipWaybill, Long> {
    List<Optional<EquipWaybill>> findByCommentStartsWith(String comment);
}
