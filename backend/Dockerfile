# 빌드 단계
FROM --platform=linux/arm64 gradle:8.12-jdk17 AS build
WORKDIR /app

COPY build.gradle settings.gradle .
COPY gradle ./gradle
RUN gradle dependencies --no-daemon

COPY src ./src
RUN gradle bootJar --no-daemon -x test

# 실행 단계
FROM --platform=linux/arm64 amazoncorretto:17
WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

ENV JAVA_OPTS="-Xms512m -Xmx512m"
ENV SERVER_PORT=8080

EXPOSE 8080

ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]
