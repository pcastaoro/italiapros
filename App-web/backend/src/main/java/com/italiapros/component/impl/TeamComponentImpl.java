package com.italiapros.component.impl;

import com.italiapros.component.TeamComponent;
import com.italiapros.dto.TeamDTO;
import com.italiapros.dto.TeamSearchDTO;
import com.italiapros.mapper.TeamMapper;
import com.italiapros.service.TeamService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TeamComponentImpl implements TeamComponent {

    private final TeamService service;

    private final TeamMapper mapper;

    public TeamComponentImpl(TeamService service, TeamMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @Override
    public TeamDTO create(TeamDTO TeamDTO) {
        return mapper.entityToDto(service.create(mapper.dtoToEntity(TeamDTO)));
    }

    @Override
    public List<TeamDTO> getAll() {
        return mapper.entityListToDtoList(service.getAll());
    }

    @Override
    public TeamDTO getById(int id) {
        return mapper.entityToDto(service.getById(id));
    }

    @Override
    public TeamDTO update(int id, TeamDTO TeamDTO) {
        return mapper.entityToDto(service.update(mapper.dtoToEntity(TeamDTO)));
    }

    @Override
    public void delete(int id) {
        service.delete(id);
    }

    @Override
    public List<TeamDTO> search(TeamSearchDTO TeamSearchDTO) {
        return mapper.entityListToDtoList(service.search(mapper.dtoToModel(TeamSearchDTO)));
    }

}
