FROM openjdk:21-jdk-slim
VOLUME /tmp
COPY target/Hospital-Service-1.0.jar Hospital-Service.jar
ENTRYPOINT ["java", "-jar", "Hospital-Service.jar"]
