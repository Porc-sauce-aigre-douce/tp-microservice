package com.example.film_projet.exception;

public class FilmNotFoundException extends RuntimeException{
    public FilmNotFoundException(String message) {
        super(message);
    }
}
