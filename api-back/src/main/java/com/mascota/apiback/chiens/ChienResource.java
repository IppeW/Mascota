package com.mascota.apiback.chiens;

import com.mascota.apiback.entity.Chien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ChienResource {

    @Autowired
    private ChienHardcodedService chienService;

    @GetMapping(path = "/{username}/chiens")
    public List<Chien> getAllChiens(@PathVariable String username){
    return chienService.findAll();
    }

    //users/{username}@PathVariable String username/

    @GetMapping(path = "/{username}/chiens/{id}")
    public Chien getChienById(@PathVariable String username, @PathVariable long id){
        return chienService.findById(id);
    }
}
