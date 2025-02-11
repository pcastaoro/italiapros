package com.italiapros.repository;

import com.italiapros.model.PlayerSearchModel;
import com.italiapros.model.entity.PlayerEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository {

    PlayerEntity create(PlayerEntity playerEntity);

    List<PlayerEntity> getAll();

    PlayerEntity getByid(int id);

    PlayerEntity update(PlayerEntity playerEntity);

    void delete(int id);

    List<PlayerEntity> search(PlayerSearchModel playerSearchModel);
}
