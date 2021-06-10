package com.mascota.apiback.chiens;

import java.util.List;

import com.mascota.apiback.entity.Chien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChienJpaRepository extends JpaRepository <Chien, Long>{
    List<Chien> findByUsername(String username);
}
