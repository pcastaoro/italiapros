package com.italiapros.mapper;

import com.italiapros.dto.TeamDTO;
import com.italiapros.dto.TeamSearchDTO;
import com.italiapros.model.TeamSearchModel;
import com.italiapros.model.entity.TeamEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TeamMapper {

    TeamDTO entityToDto(TeamEntity entity);

    TeamEntity dtoToEntity(TeamDTO dto);

    List<TeamDTO> entityListToDtoList(List<TeamEntity> entities);

    List<TeamEntity> dtoListToEntityList(List<TeamDTO> dtos);

    TeamSearchModel dtoToModel(TeamSearchDTO TeamSearchDTO);

}
