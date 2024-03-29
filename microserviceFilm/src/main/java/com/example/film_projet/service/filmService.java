package com.example.film_projet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.film_projet.exception.FilmNotFoundException;
import com.example.film_projet.model.film;
import com.example.film_projet.repository.filmRepository;

@Service
public class filmService {
    
    @Autowired
    private filmRepository filmRepository;

    public List<film> getAllFilms() {
        return filmRepository.findAll();
    }

    public film getFilmById(String id) {
        return filmRepository.findById(id).orElse(null);
    }

    public film createFilm(film film) {
        film film_raiponce = new film();
        film_raiponce.verifyNotNull();
        return filmRepository.save(film);
    }

    public film updateFilm(String id, film updatedFilm) {
        // Vérifiez si le film existe
        film existingFilm = filmRepository.findById(id).orElse(null);

        // Si le film n'existe pas, vous pouvez gérer cela selon vos besoins (par exemple, lever une exception)
        if (existingFilm == null) {
            // Gérez le cas où le film n'existe pas, par exemple :
            throw new FilmNotFoundException("Le film avec l'ID " + id + " n'a pas été trouvé.");
        }

        // Mettez à jour les champs du film existant avec les nouvelles valeurs
        if (updatedFilm.getTitre() != null) {
            existingFilm.setTitre(updatedFilm.getTitre());
        }

        if (updatedFilm.getDescription() != null) {
            existingFilm.setDescription(updatedFilm.getDescription());
        }

        if (updatedFilm.getGenre() != null) {
            existingFilm.setGenre(updatedFilm.getGenre());
        }

        if (updatedFilm.getDuree() != null) {
            existingFilm.setDuree(updatedFilm.getDuree());
        }

        if (updatedFilm.getAnneeSortie() != 0) {
            existingFilm.setAnneeSortie(updatedFilm.getAnneeSortie());
        }

        if (updatedFilm.getRealisateur() != null) {
            existingFilm.setRealisateur(updatedFilm.getRealisateur());
        }

        if (updatedFilm.getImage() != null) {
            existingFilm.setImage(updatedFilm.getImage());
        }

        // Enregistrez le film mis à jour dans la base de données
        return filmRepository.save(existingFilm);
    }

    public void deleteFilm(String id) { 
        filmRepository.deleteById(id);
    }
}
