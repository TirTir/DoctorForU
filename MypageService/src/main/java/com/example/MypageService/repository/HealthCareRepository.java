package com.example.MypageService.repository;

import com.example.MypageService.entity.HealthCare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional(readOnly = true)
public interface HealthCareRepository extends JpaRepository<HealthCare, Long> {
//    Optional<HealthCare> findByUserId(String userId);
//    Optional<HealthCare> findAllByUserId(String userId); //List<HealthResponse>

    @Query("SELECT h FROM HealthCare h WHERE h.userId = :userId")
    List<HealthCare> findByUserId(@Param("userId") String userId);
}
