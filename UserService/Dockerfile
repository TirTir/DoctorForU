FROM openjdk:21-jdk-slim

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY . .

# Give execute permissions to gradlew
RUN chmod +x ./gradlew

# Gradle 빌드 및 빌드 파일 위치 출력
RUN ./gradlew clean build -x test --no-daemon && ls -la build/libs

# 빌드된 JAR 파일을 복사
RUN cp build/libs/UserService-0.0.1-SNAPSHOT.jar UserService.jar

# 컨테이너 시작 명령어
ENTRYPOINT ["java", "-jar", "UserService.jar"]
