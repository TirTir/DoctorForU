package com.example.MypageService.service;

import com.example.MypageService.dto.health.HealthCareConverter;
import com.example.MypageService.dto.health.HealthResponse;
import com.example.MypageService.entity.HealthCare;
import com.example.MypageService.repository.HealthCareRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HealthCareService {

    @Autowired
    private HealthCareRepository healthRepository;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<HealthResponse> getHealth(String userId) {
        List<HealthCare> healthcareList = healthRepository.findByUserId(userId);
        return HealthCareConverter.toResponseList(healthcareList);
    }

    public void registerHealth(String userId, HealthCare healthCare) {
        HealthCare newHealthCare = new HealthCare(
                userId,
                healthCare.getSystolic(),
                healthCare.getDiastolic(),
                healthCare.getWeight()
        );

        logger.info("newHealthCare: " + newHealthCare);
        healthRepository.save(newHealthCare);
    }
}

