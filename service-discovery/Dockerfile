FROM openjdk:21-jdk-slim
WORKDIR /app
COPY . /app

# Gradle 빌드 및 빌드 파일 위치 출력
RUN ./gradlew clean build -x test --no-daemon && ls -la build/libs

# 빌드된 파일을 복사
COPY build/libs/*.jar service-discovery.jar

# 컨테이너 시작 명령어
ENTRYPOINT ["java", "-jar", "service-discovery.jar"]
