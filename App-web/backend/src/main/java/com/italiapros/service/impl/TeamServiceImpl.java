package com.italiapros.service.impl;

import com.italiapros.model.TeamSearchModel;
import com.italiapros.model.entity.TeamEntity;
import com.italiapros.repository.TeamRepository;
import com.italiapros.service.TeamService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    private final TeamRepository repository;

    public TeamServiceImpl(TeamRepository repository) {
        this.repository = repository;
    }

    @Override
    public TeamEntity create(TeamEntity TeamEntity) {
        return repository.create(TeamEntity);
    }

    @Override
    public List<TeamEntity> getAll() {
        return repository.getAll();
    }

    @Override
    public TeamEntity getById(int id) {
        return repository.getByid(id);
    }

    @Override
    public TeamEntity update(TeamEntity TeamEntity) {
        return repository.update(TeamEntity);
    }

    @Override
    public void delete(int id) {
        repository.delete(id);
    }

    @Override
    public List<TeamEntity> search(TeamSearchModel TeamSearchModel) {
        return repository.search(TeamSearchModel);
    }

}
