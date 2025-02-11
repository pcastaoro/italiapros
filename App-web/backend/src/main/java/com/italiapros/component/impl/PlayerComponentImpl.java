package com.italiapros.component.impl;

import com.italiapros.component.PlayerComponent;
import com.italiapros.dto.PlayerDTO;
import com.italiapros.dto.PlayerSearchDTO;
import com.italiapros.mapper.PlayerMapper;
import com.italiapros.service.PlayerService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlayerComponentImpl implements PlayerComponent {

    private final PlayerService service;

    private final PlayerMapper mapper;

    public PlayerComponentImpl(PlayerService service, PlayerMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @Override
    public PlayerDTO create(PlayerDTO playerDTO) {
        return mapper.entityToDto(service.create(mapper.dtoToEntity(playerDTO)));
    }

    @Override
    public List<PlayerDTO> getAll() {
        return mapper.entityListToDtoList(service.getAll());
    }

    @Override
    public PlayerDTO getById(int id) {
        return mapper.entityToDto(service.getById(id));
    }

    @Override
    public PlayerDTO update(int id, PlayerDTO playerDTO) {
        return mapper.entityToDto(service.update(mapper.dtoToEntity(playerDTO)));
    }

    @Override
    public void delete(int id) {
        service.delete(id);
    }

    @Override
    public List<PlayerDTO> search(PlayerSearchDTO playerSearchDTO) {
        return mapper.entityListToDtoList(service.search(mapper.dtoToModel(playerSearchDTO)));
    }

}
