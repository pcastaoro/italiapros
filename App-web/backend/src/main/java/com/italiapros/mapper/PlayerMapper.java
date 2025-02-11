package com.italiapros.mapper;

import com.italiapros.dto.PlayerDTO;
import com.italiapros.dto.PlayerSearchDTO;
import com.italiapros.model.entity.PlayerEntity;
import com.italiapros.model.PlayerSearchModel;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PlayerMapper {

    PlayerDTO entityToDto(PlayerEntity entity);

    PlayerEntity dtoToEntity(PlayerDTO dto);

    List<PlayerDTO> entityListToDtoList(List<PlayerEntity> entities);

    List<PlayerEntity> dtoListToEntityList(List<PlayerDTO> dtos);

    PlayerSearchModel dtoToModel(PlayerSearchDTO playerSearchDTO);

}
