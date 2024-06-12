//package com.example.HospitalService.Config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import feign.codec.Decoder;
//import feign.codec.Encoder;
//import feign.form.spring.SpringFormEncoder;
//import org.springframework.beans.factory.ObjectFactory;
//import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
//import org.springframework.cloud.openfeign.support.ResponseEntityDecoder;
//import org.springframework.cloud.openfeign.support.SpringDecoder;
//import org.springframework.cloud.openfeign.support.SpringEncoder;
//
//@Configuration
//public class FeignClientConfig {
//    @Bean
//    public Encoder feignEncoder() {
//        return new SpringEncoder(messageConverters);
//    }
//
//    @Bean
//    public Decoder feignDecoder() {
//        return new ResponseEntityDecoder(new SpringDecoder(messageConverters));
//    }
//
//    private ObjectFactory<HttpMessageConverters> messageConverters = HttpMessageConverters::new;
//}
//
