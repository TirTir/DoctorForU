package com.example.HospitalService.Service;

import com.example.HospitalService.dto.HospitalDetailData;
import com.example.HospitalService.dto.HospitalRequest;
import com.example.HospitalService.dto.HospitalData;
import com.example.HospitalService.dto.HpidRequest;
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

@Service
public class HospitalDetailService {

    private static final Logger logger = LoggerFactory.getLogger(HospitalService.class);

    @Autowired
    private RestTemplate restTemplate;

    private static final String PUBLIC_DATA_API_URL = "http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlBassInfoInqire";
    //private static final String SERVICE_KEY = "K9t4%2FMS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C%2BKuQ%3D%3D"; // 인코딩된 서비스 키 사용
    //private static final String SERVICE_KEY = "K9t4/MS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C+KuQ=="; // 인코딩이 된..? rest자체에서

    private static final String SERVICE_KEY = "K9t4%2FMS1InyhHxC7oJtTEGncK1mWLav7ML0G5XcgX7k37YyN6sL7owPZDulwsO7m0jyVwvEqeoiFQp3c7C%2BKuQ%3D%3D"; // 인코딩이 된..? rest자체에서
    private static final String NUM_OF_ROWS = "500";
    private static final String PAGE_NO = "1";

    public List<HospitalDetailData> getHospitalDetail(HpidRequest hpid) { // api 호출 보내기 함수
        DefaultUriBuilderFactory uriBuilderFactory = new DefaultUriBuilderFactory(); // building 하는 요소들 제어
        uriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE); // 인코딩 자체를 멈추기 막아버리기
        restTemplate.setUriTemplateHandler(uriBuilderFactory); // 레스트 템플릿 빌딩 잡기

        String apiUrl = buildApiUrl(hpid); //hpid 보내기
        logger.info("Constructed API URL: " + apiUrl);
        String response = restTemplate.getForObject(apiUrl.replace("%25","%"), String.class); // 혹시 몰라서 한번 더 25 제거
        String utf8EncodedResponse = new String(response.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8); // 한글 깨지는거 잡기

        logger.info("Response: " + utf8EncodedResponse);

        return parseXmlResponse(utf8EncodedResponse);
    }

    private String buildApiUrl(HpidRequest hpid) { // api 호출 url 만들기

        UriComponents builder = UriComponentsBuilder.fromHttpUrl(PUBLIC_DATA_API_URL)
                .queryParam("pageNo", PAGE_NO)
                .queryParam("numOfRows", NUM_OF_ROWS)
                .queryParam("serviceKey", SERVICE_KEY)
                .queryParam("HPID", hpid.getHpid())
                .encode()
                .build();

        StringBuilder apiUrl = new StringBuilder(builder.toString());


        String apiUrlStr = apiUrl.toString();
        logger.info("Final API URL: " + apiUrlStr);
        return apiUrlStr;
    }

    private String encodeValue(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }

    private List<HospitalDetailData> parseXmlResponse(String response) {
        List<HospitalDetailData> hospitals = new ArrayList<>();
        try {
            XmlMapper xmlMapper = new XmlMapper();
            JsonNode root = xmlMapper.readTree(response.getBytes(StandardCharsets.UTF_8));
            JsonNode items = root.path("body").path("items").path("item");

            if (items.isArray()) { // Array가 필요할가..?
                for (JsonNode item : items) {
                    HospitalDetailData detailData = new HospitalDetailData();
                    // 여기 처리 필요함
                    detailData.setHpid(item.path("hpid").asText());
                    detailData.setDutyAddr(item.path("dutyAddr").asText());
                    detailData.setDutyName(item.path("dutyName").asText());
                    detailData.setDutyTel1(item.path("dutyTel1").asText());
                    detailData.setDutyTel3(item.path("dutyTel3").asText());
                    detailData.setDutyTime1c(item.path("dutyTime1c").asText());
                    detailData.setDutyTime1s(item.path("dutyTime1s").asText());
                    detailData.setDutyTime2c(item.path("dutyTime2c").asText());
                    detailData.setDutyTime2s(item.path("dutyTime2s").asText());
                    detailData.setDutyTime3c(item.path("dutyTime3c").asText());
                    detailData.setDutyTime3s(item.path("dutyTime3s").asText());
                    detailData.setDutyTime4c(item.path("dutyTime4c").asText());
                    detailData.setDutyTime4s(item.path("dutyTime4s").asText());
                    detailData.setDutyTime5c(item.path("dutyTime5c").asText());
                    detailData.setDutyTime5s(item.path("dutyTime5s").asText());
                    detailData.setDutyTime6c(item.path("dutyTime6c").asText());
                    detailData.setDutyTime6s(item.path("dutyTime6s").asText());
                    detailData.setDutyTime7c(item.path("dutyTime7c").asText());
                    detailData.setDutyTime7s(item.path("dutyTime7s").asText());
                    detailData.setDutyTime8c(item.path("dutyTime8c").asText());
                    detailData.setDutyTime8s(item.path("dutyTime8s").asText());
                    detailData.setWgs84Lat(item.path("wgs84Lat").asText());
                    detailData.setWgs84Lon(item.path("wgs84Lon").asText());
                    detailData.setDgidIdName(item.path("dgidIdName").asText());

                    detailData.setHpbdn(item.path("hpbdn").asText());
                    detailData.setHpccuyn(item.path("hpccuyn").asText());
                    detailData.setHpcuyn(item.path("hpcuyn").asText());
                    detailData.setHperyn(item.path("hperyn").asText());
                    detailData.setHpgryn(item.path("hpgryn").asText());
                    detailData.setHpicuyn(item.path("hpicuyn").asText());
                    detailData.setHpnicuyn(item.path("hpnicuyn").asText());
                    detailData.setHpopyn(item.path("hpopyn").asText());

                    detailData.setMKioskTy25(item.path("MKioskTy25").asText());
                    detailData.setMKioskTy1(item.path("MKioskTy1").asText());
                    detailData.setMKioskTy2(item.path("MKioskTy2").asText());
                    detailData.setMKioskTy3(item.path("MKioskTy3").asText());
                    detailData.setMKioskTy4(item.path("MKioskTy4").asText());
                    detailData.setMKioskTy5(item.path("MKioskTy5").asText());
                    detailData.setMKioskTy6(item.path("MKioskTy6").asText());
                    detailData.setMKioskTy7(item.path("MKioskTy7").asText());
                    detailData.setMKioskTy8(item.path("MKioskTy8").asText());
                    detailData.setMKioskTy9(item.path("MKioskTy9").asText());
                    detailData.setMKioskTy10(item.path("MKioskTy10").asText());
                    detailData.setMKioskTy11(item.path("MKioskTy11").asText());

                    detailData.setO001(item.path("o001").asText());
                    detailData.setO002(item.path("o002").asText());
                    detailData.setO003(item.path("o003").asText());
                    detailData.setO004(item.path("o004").asText());
                    detailData.setO005(item.path("o005").asText());
                    detailData.setO006(item.path("o006").asText());
                    detailData.setO007(item.path("o007").asText());
                    detailData.setO008(item.path("o008").asText());
                    detailData.setO009(item.path("o009").asText());
                    detailData.setO010(item.path("o010").asText());
                    detailData.setO011(item.path("o011").asText());
                    detailData.setO012(item.path("o012").asText());
                    detailData.setO013(item.path("o013").asText());
                    detailData.setO014(item.path("o014").asText());
                    detailData.setO015(item.path("o015").asText());
                    detailData.setO016(item.path("o016").asText());
                    detailData.setO017(item.path("o017").asText());
                    detailData.setO018(item.path("o018").asText());
                    detailData.setO019(item.path("o019").asText());
                    detailData.setO020(item.path("o020").asText());
                    detailData.setO021(item.path("o021").asText());
                    detailData.setO022(item.path("o022").asText());
                    detailData.setO023(item.path("o023").asText());
                    detailData.setO024(item.path("o024").asText());
                    detailData.setO025(item.path("o025").asText());

                    detailData.setO026(item.path("o026").asText());
                    detailData.setO027(item.path("o027").asText());
                    detailData.setO028(item.path("o028").asText());
                    detailData.setO029(item.path("o029").asText());
                    detailData.setO030(item.path("o030").asText());
                    detailData.setO031(item.path("o031").asText());
                    detailData.setO032(item.path("o032").asText());
                    detailData.setO033(item.path("o033").asText());
                    detailData.setO034(item.path("o034").asText());
                    detailData.setO035(item.path("o035").asText());
                    detailData.setO036(item.path("o036").asText());
                    detailData.setO037(item.path("o037").asText());
                    detailData.setO038(item.path("o038").asText());

                    hospitals.add(detailData);
                }
            }
        } catch (Exception e) {
            logger.error("Error parsing XML response", e);
        }
        return hospitals;
    }
}
