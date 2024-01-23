cd microserviceFilm 
START mvn spring-boot:run
cd ../microserviceScreening
pnpm install
START node index.js
cd ../microserviceUsers
pnpm install
START node index.js
cd ../front && ng serve