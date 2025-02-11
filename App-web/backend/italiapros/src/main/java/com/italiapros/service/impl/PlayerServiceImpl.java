package com.italiapros.service.impl;

import com.italiapros.model.PlayerSearchModel;
import com.italiapros.model.entity.PlayerEntity;
import com.italiapros.repository.PlayerRepository;
import com.italiapros.service.PlayerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository repository;

    public PlayerServiceImpl(PlayerRepository repository) {
        this.repository = repository;
    }

    @Override
    public PlayerEntity create(PlayerEntity playerEntity) {
        return repository.create(playerEntity);
    }

    @Override
    public List<PlayerEntity> getAll() {
        return repository.getAll();
    }

    @Override
    public PlayerEntity getById(int id) {
        return repository.getByid(id);
    }

    @Override
    public PlayerEntity update(PlayerEntity playerEntity) {
        return repository.update(playerEntity);
    }

    @Override
    public void delete(int id) {
        repository.delete(id);
    }

    @Override
    public List<PlayerEntity> search(PlayerSearchModel playerSearchModel) {
        return repository.search(playerSearchModel);
    }

}
