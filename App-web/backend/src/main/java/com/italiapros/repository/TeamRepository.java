package com.italiapros.repository;

import com.italiapros.model.TeamSearchModel;
import com.italiapros.model.entity.TeamEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository {

    TeamEntity create(TeamEntity TeamEntity);

    List<TeamEntity> getAll();

    TeamEntity getByid(int id);

    TeamEntity update(TeamEntity TeamEntity);

    void delete(int id);

    List<TeamEntity> search(TeamSearchModel TeamSearchModel);
}
