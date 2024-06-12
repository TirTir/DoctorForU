package com.example.HospitalService.Service;

import com.example.HospitalService.dto.HospitalRequest;
import com.example.HospitalService.dto.HospitalData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
@Service
public class HospitalService {

    private static final Logger logger = LoggerFactory.getLogger(HospitalService.class);

    @Autowired
    private RestTemplate restTemplate;

    private static final String PUBLIC_DATA_API_URL = "https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire";
    //private static final String SERVICE_KEY = "K9t4%2FMS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C%2BKuQ%3D%3D"; // 인코딩된 서비스 키 사용
    //private static final String SERVICE_KEY = "K9t4/MS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C+KuQ=="; // 인코딩이 된..? rest자체에서

    private static final String SERVICE_KEY = "K9t4%2FMS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C%2BKuQ%3D%3D"; // 인코딩이 된..? rest자체에서
    private static final String NUM_OF_ROWS = "3000";
    private static final String PAGE_NO = "1";

    public List<HospitalData> searchHospitals(HospitalRequest request) { // api 호출 보내기 함수
        DefaultUriBuilderFactory uriBuilderFactory = new DefaultUriBuilderFactory(); // building 하는 요소들 제어
        uriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE); // 인코딩 자체를 멈추기 막아버리기
        //uriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.URI_COMPONENT);
        restTemplate.setUriTemplateHandler(uriBuilderFactory); // 레스트 템플릿 빌딩 잡기

        String apiUrl = buildApiUrl(request);
        logger.info("Constructed API URL: " + apiUrl);
//        String No25Url = apiUrl.replace("%25", "%");
        String response = restTemplate.getForObject(apiUrl.replace("%25","%"), String.class); // 혹시 몰라서 한번 더 25 제거
        String utf8EncodedResponse = new String(response.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8); // 한글 깨지는거 잡기

        logger.info("Response: " + utf8EncodedResponse);

        return parseXmlResponse(utf8EncodedResponse);
    }

    private String buildApiUrl(HospitalRequest request) { // api 호출 url 만들기

        UriComponents builder = UriComponentsBuilder.fromHttpUrl(PUBLIC_DATA_API_URL)
                .queryParam("pageNo", PAGE_NO)
                .queryParam("numOfRows", NUM_OF_ROWS)
                .queryParam("serviceKey", SERVICE_KEY)
                .encode()
                .build();

        StringBuilder apiUrl = new StringBuilder(builder.toString());

        if (request.getPrimaryOption() != null && !request.getPrimaryOption().isEmpty()) {

            if(request.getPrimaryOption().equals("department")){
                if (request.getSecondaryOption() != null && !request.getSecondaryOption().isEmpty()) {
                    apiUrl.append("&QD=").append(encodeValue(request.getSecondaryOption()));
                }
            }
            if(request.getPrimaryOption().equals("institute")){
                if (request.getSecondaryOption() != null && !request.getSecondaryOption().isEmpty()) {
                    apiUrl.append("&QZ=").append(encodeValue(request.getSecondaryOption()));
                }
            }
//            apiUrl.append("&QZ=").append(encodeValue(request.getPrimaryOption())); // 미리 인코딩하자  -> 위에 가면 다 막힘
        }



//        if (request.getPrimaryOption() != null && !request.getPrimaryOption().isEmpty()) {
//            apiUrl.append("&QZ=").append(encodeValue(request.getPrimaryOption())); // 미리 인코딩하자  -> 위에 가면 다 막힘
//        }
//        if (request.getSecondaryOption() != null && !request.getSecondaryOption().isEmpty()) {
//            apiUrl.append("&QD=").append(encodeValue(request.getSecondaryOption()));
//        }
        if (request.getSelectedCity() != null && !request.getSelectedCity().isEmpty()) {
            apiUrl.append("&Q0=").append(encodeValue(request.getSelectedCity()));
        }
        if (request.getSelectedDistrict() != null && !request.getSelectedDistrict().isEmpty()) {
            apiUrl.append("&Q1=").append(encodeValue(request.getSelectedDistrict()));
        }
        if (request.getHospitalName() != null && !request.getHospitalName().isEmpty()) {
            apiUrl.append("&QN=").append(encodeValue(request.getHospitalName()));
        }

        String apiUrlStr = apiUrl.toString();
        logger.info("Final API URL: " + apiUrlStr);
        return apiUrlStr;
    }

    private String encodeValue(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }

    private List<HospitalData> parseXmlResponse(String response) {
        List<HospitalData> hospitals = new ArrayList<>();
        try {
            XmlMapper xmlMapper = new XmlMapper();
            JsonNode root = xmlMapper.readTree(response.getBytes(StandardCharsets.UTF_8));
            JsonNode items = root.path("body").path("items").path("item");

            if (items.isArray()) {
                for (JsonNode item : items) {
                    HospitalData hospital = new HospitalData();
                    hospital.setDutyAddr(item.path("dutyAddr").asText());
                    hospital.setDutyDiv(item.path("dutyDiv").asText());
                    hospital.setDutyDivNam(item.path("dutyDivNam").asText());
                    hospital.setDutyName(item.path("dutyName").asText());
                    hospital.setDutyTel1(item.path("dutyTel1").asText());
                    hospital.setDutyTime1c(item.path("dutyTime1c").asText());
                    hospital.setDutyTime1s(item.path("dutyTime1s").asText());
                    hospital.setWgs84Lat(item.path("wgs84Lat").asText());
                    hospital.setWgs84Lon(item.path("wgs84Lon").asText());
                    hospital.setHpid(item.path("hpid").asText());
                    hospitals.add(hospital);
                }
            }
        } catch (Exception e) {
            logger.error("Error parsing XML response", e);
        }
        return hospitals;
    }
}
