package com.italiapros.service;

import com.italiapros.model.TeamSearchModel;
import com.italiapros.model.entity.TeamEntity;

import java.util.List;

public interface TeamService {

    TeamEntity create(TeamEntity TeamEntity);

    List<TeamEntity> getAll();

    TeamEntity getById(int id);

    TeamEntity update(TeamEntity TeamEntity);

    void delete(int id);

    List<TeamEntity> search(TeamSearchModel TeamSearchModel);

}
