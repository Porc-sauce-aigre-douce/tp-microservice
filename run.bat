cd microserviceFilm 
START mvn spring-boot:run
cd ../microserviceScreening
START cmd.exe /k "pnpm install && node index.js"
cd ../microserviceUsers
START cmd.exe /k "pnpm install && node index.js"
cd ../front
npm i && ng serve