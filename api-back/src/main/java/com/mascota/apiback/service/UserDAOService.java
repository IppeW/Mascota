package com.mascota.apiback.service;

import com.mascota.apiback.entity.Chien;
import com.mascota.apiback.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class UserDAOService {

    @PersistenceContext
    private EntityManager entityManager;

    public long insert(User user){
        entityManager.persist(user);
        return user.getId();
    }

    public long insert(Chien chien){
        entityManager.persist(chien);
        return chien.getId();
    }
}
