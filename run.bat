cd microserviceFilm 
START mvn spring-boot:run
cd ../microserviceScreening
START node index.js
cd ../microserviceUsers
START node index.js
cd ../front && ng serve