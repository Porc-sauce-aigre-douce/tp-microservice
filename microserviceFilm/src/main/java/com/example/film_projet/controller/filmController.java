package com.example.film_projet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.film_projet.model.film;
import com.example.film_projet.service.filmService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("film")
public class filmController {
    
    @Autowired
    private filmService filmService;

    @GetMapping
    public List<film> getAllFilms() {
        return filmService.getAllFilms();
    }

    @GetMapping("/{id}")
    public film getFilmById(@PathVariable String id) {
        return filmService.getFilmById(id);
    }

    @PostMapping
    public film createFilm(@RequestBody film film) {
        return filmService.createFilm(film);
    }

    @PutMapping("/{id}")
    public film updateFilm(@PathVariable String id, @RequestBody film film) {
        return filmService.updateFilm(id, film);
    }

    @DeleteMapping("/{id}")
    public void deleteFilm(@PathVariable String id) {
        filmService.deleteFilm(id);
    }

}
