# BUILD STAGE
FROM eclipse-temurin:17-jdk-alpine AS build
ENV HOME=/usr/app
WORKDIR $HOME
COPY . .
RUN ls
RUN dos2unix mvnw
RUN --mount=type=cache,target=/root/.m2 ./mvnw -f $HOME/pom.xml clean package

# Package stage
FROM eclipse-temurin:17-jre-alpine
ARG JAR_FILE=/usr/app/target/*.jar
COPY --from=build $JAR_FILE /app/runner.jar
EXPOSE 8080
ENTRYPOINT java -jar /app/runner.jar

# FROM eclipse-temurin:17-jdk-alpine as build
# WORKDIR /app
# COPY . .
# CMD mvn spring-boot:run