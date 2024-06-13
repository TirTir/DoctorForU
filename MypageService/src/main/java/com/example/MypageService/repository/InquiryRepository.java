package com.example.MypageService.repository;

import com.example.MypageService.entity.HealthCare;
import com.example.MypageService.entity.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional(readOnly = true)
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    @Query("SELECT h FROM Inquiry h WHERE h.userId = :userId")
    List<Inquiry> findByUserId(@Param("userId") String userId);
}
