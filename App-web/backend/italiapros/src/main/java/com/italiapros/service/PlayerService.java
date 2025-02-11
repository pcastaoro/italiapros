package com.italiapros.service;

import com.italiapros.model.PlayerSearchModel;
import com.italiapros.model.entity.PlayerEntity;

import java.util.List;

public interface PlayerService {

    PlayerEntity create(PlayerEntity playerEntity);

    List<PlayerEntity> getAll();

    PlayerEntity getById(int id);

    PlayerEntity update(PlayerEntity playerEntity);

    void delete(int id);

    List<PlayerEntity> search(PlayerSearchModel playerSearchModel);

}
