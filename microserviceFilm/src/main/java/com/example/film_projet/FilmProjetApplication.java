package com.example.film_projet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.film_projet.repository.filmRepository;

@SpringBootApplication
@EnableMongoRepositories
public class FilmProjetApplication implements CommandLineRunner{

	@Autowired
	filmRepository filmItemRepo;

	public static void main(String[] args) {
		SpringApplication.run(FilmProjetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}

}
