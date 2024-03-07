# TP-MICROSERVICES

[![codecov](https://codecov.io/gh/Porc-sauce-aigre-douce/tp-microservice/graph/badge.svg?token=h1n6KStt8U)](https://codecov.io/gh/Porc-sauce-aigre-douce/tp-microservice)

## Front
1. Angular
This documentation provides an overview of the frontend part of our Angular project. Here you'll find information about the project structure, how to run the application, and other relevant details.

### Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Deployment](#deployment)

---

### Project Structure.
The frontend part of our project is built using Angular framework. Below is a brief explanation of the main directories and files in the project:

- **src/**: This directory contains all the source code for our Angular application.
  - **app/**: Contains the components, services, modules, and other files that make up the frontend application.
  - **assets/**: Stores static assets like images, fonts, and other files used by the application.
  - **environments/**: Contains environment-specific configuration files.
  - **index.html**: The main HTML file where the Angular application is bootstrapped.
  - **styles.scss**: Global styles for the application.

### Installation.
Before running the application, make sure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

After installing Node.js and npm, you can follow these steps to install the dependencies:

```bash
npm install
```

### Running the Application.

Once the dependencies are installed, you can run the application locally using the Angular CLI. Run the following command:

```bash
ng serve
```

This will start a development server and launch the application in your default web browser. You can view the application at http://localhost:4200.

### Building the Application.

Since the application is Dockerize, you can launch the Front part by launching this command :

```bash
Docker compose up front --build
```

### Deployment.

Deployment of our application was made using `Scalingo`,  a platform that allows us to deploy applications. 

## Back
1. SpringBoot

This documentation provides an overview of the backend part of our project built with Spring Boot. Here you'll find information about the project structure, how to run the application, and other relevant details.

### Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Deployment](#deployment)

---

### Project Structure
The backend part of our project is built using the Spring Boot framework. Below is a brief explanation of the main directories and files in the project:

- **src/main/java/**: Contains all the Java source code for our Spring Boot application.
  - **controller/**: Contains the REST controllers for handling incoming HTTP requests.
  - **service/**: Contains the service layer that implements business logic.
  - **repository/**: Contains repository interfaces for database operations.
  - **model/**: Contains entity classes representing data models.
  - **exception/**: Contains custom exception classes.
  - **Application.java**: The main  class which starts the Spring Boot application.
- **src/test/java/com/example/film_projet**:  Contains unit tests for the project.
- **src/main/resources/**: Contains application properties, configuration files, and static resources.
  - **application.properties**: Configuration file for Spring Boot application properties.

### Technologies Used
- Java
- Spring Boot
- Maven
- Docker

### Installation
Before running the application, make sure you have Java Development Kit (JDK) and Maven installed on your machine.

You can also use Docker.

### Running the Application
To run the Spring Boot application, you can use Maven:

```bash
mvn spring-boot:run
```

### Building the Application
The application is built using Maven. To build it, execute the following command in your terminal:

```bash
Docker compose up film --build
```

### Deployment
Deployment of the Spring Boot application can be done to various platforms including cloud services, on-premises servers, or containers.

We chose to put ours on `Dockerhub`, as well as `Scalingo`.

2. NodeJS

## Deploy the application

To deploy our application, launch ``Docker Desktop``. Then execute the following command in your terminal : 

```bash
Docker compose up
```

This command will launch every part of our project at once
