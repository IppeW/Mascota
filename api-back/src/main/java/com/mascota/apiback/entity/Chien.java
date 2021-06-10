package com.mascota.apiback.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Chien {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String race;
    private String pays;
    private String taille;
    private String poile;
    private String photo;

    public Chien() {
    }

    public Chien(long id, String username, String race, String pays, String taille, String poile, String photo) {
        super();
        this.id = id;
        this.username = username;
        this.race = race;
        this.pays = pays;
        this.taille = taille;
        this.poile = poile;
        this.photo = photo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id; }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getTaille() {
        return taille;
    }

    public void setTaille(String taille) {
        this.taille = taille;
    }

    public String getPoile() {
        return poile;
    }

    public void setPoile(String poile) {
        this.poile = poile;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Chien other = (Chien) obj;
        if (id != other.id)
            return false;
        return true;
    }
}
