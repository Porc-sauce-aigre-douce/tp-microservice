package com.example.film_projet.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Films")
public class film {
    
    @Id
    private String id;

    private String titre;
    private String description;
    private String image;
    private String genre;
    private String duree;
    private int annee_sortie;
    private String realisateur;

    public film() {
        // Aucun argument n'est nécessaire pour le constructeur par défaut
    }

    public void setID(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getTitre() {
        return this.titre;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImage() {
        return this.image;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return this.genre;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getDuree() {
        return this.duree;
    }

    public void setAnneeSortie(int annee_sortie) {
        this.annee_sortie = annee_sortie;
    }

    public int getAnneeSortie() {
        return this.annee_sortie;
    }

    public void setRealisateur(String realisateur) {
        this.realisateur = realisateur;
    }

    public String getRealisateur() {
        return this.realisateur;
    }
}
