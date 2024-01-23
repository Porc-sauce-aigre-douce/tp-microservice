package com.example.film_projet.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.film_projet.model.film;

public interface filmRepository extends MongoRepository<film, String> {
    
    @Query("{titre: '?0'}")
    film findFilmByName(String titre);
}