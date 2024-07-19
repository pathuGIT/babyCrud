package com.baby.babyCrud.externel;

import com.baby.babyCrud.domain.Baby;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BabyRepository extends JpaRepository<Baby, Integer> {
}
