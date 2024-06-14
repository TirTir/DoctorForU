FROM openjdk:21-jdk-slim
WORKDIR /app
COPY . /app

# Gradle 빌드
RUN ./gradlew clean build -x test --no-daemon && ls -la build/libs
COPY build/libs/service-discovery-1.0.jar service-discovery.jar

# 컨테이너 시작 명령어
ENTRYPOINT ["java", "-jar", "service-discovery.jar"]
