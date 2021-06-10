package com.mascota.apiback.chiens;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mascota.apiback.entity.Chien;

    @CrossOrigin(origins="http://localhost:4200")
    @RestController
    public class ChienJpaResource {

        @Autowired
        private ChienHardcodedService chienService;

        @Autowired
        private ChienJpaRepository chienJpaRepository;

        @GetMapping ("/jpa/{username}/chiens")
        public List<Chien> getAllChiens(@PathVariable String username){
            return chienJpaRepository.findByUsername(username);

        }

        @GetMapping("/jpa/{username}/chiens/{id}")
        public Chien getChien(@PathVariable String username, @PathVariable long id){
            return chienJpaRepository.findById(id).get();
        }
}
