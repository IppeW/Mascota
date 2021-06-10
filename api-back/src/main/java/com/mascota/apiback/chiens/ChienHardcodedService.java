package com.mascota.apiback.chiens;

import com.mascota.apiback.entity.Chien;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChienHardcodedService {

    private static List<Chien> chiens = new ArrayList<>();
    private static long idCounter = 0;

    static {
        chiens.add(new Chien(++idCounter,"meddi",  "Berger Allemand", "Allemagne", "Grand", "Mi-Long", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.beAr6uwYgdu-yrLuHJHxZgHaFH%26pid%3DApi&f=1" ));
        chiens.add(new Chien(++idCounter, "meddi", "Yorkshire Terrier", "Grande-Bretagne", "Petit", "Long", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IRB6gLG6MpG-iPKdWSG0kQHaGO%26pid%3DApi&f=1" ));
        chiens.add(new Chien(++idCounter, "meddi", "Bulldog", "France", "Petit", "Court", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B4wlE9Cvw-JaIGdp1GyQWgHaE7%26pid%3DApi&f=1" ));
        chiens.add(new Chien(++idCounter, "meddi", "rottweiler", "Allemagne", "Moyen", "Court", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gERxfYZk1fXGowwWeo5VCAHaG_%26pid%3DApi&f=1" ));
        chiens.add(new Chien(++idCounter, "meddi", "Dingo", " Australie", "Moyen", "Court", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WBCEbkGw64Du2ltxZWKgrwHaF6%26pid%3DApi&f=1" ));
        chiens.add(new Chien(++idCounter, "meddi", "Chow-chow", " Mongolie", "Moyen", "Mi-long", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.42RXg8F7c6Ifur7p443aoAHaE8%26pid%3DApi&f=1" ));
    }

    public  List<Chien> findAll() {
        return chiens;
    }

    public Chien findById(long id) {
        for (Chien chien : chiens) {
            if (chien.getId() == id) {
                return chien;
            }
        }

        return null;
    }
}
