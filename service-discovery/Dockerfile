FROM openjdk:21-jdk-slim
WORKDIR /app
ADD build.gradle.kts /app/
RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true

COPY ./app
RUN gradle clean build --no-daemon
COPY target/service-discovery-1.0.jar service-discovery.jar

ENTRYPOINT ["java", "-jar", "service-discovery.jar"]
