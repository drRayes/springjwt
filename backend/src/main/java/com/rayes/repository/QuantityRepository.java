package com.rayes.repository;

import com.rayes.model.Location;
import com.rayes.model.Quantity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuantityRepository extends JpaRepository<Quantity, Long> {
    List<Optional<Quantity>> findBySumLessThanEqual(Long sum);
    List<Optional<Quantity>> findByLocation(Location location);
}
