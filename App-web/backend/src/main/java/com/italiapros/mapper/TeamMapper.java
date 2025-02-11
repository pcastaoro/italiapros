package com.italiapros.mapper;

import com.italiapros.dto.TeamDTO;
import com.italiapros.dto.TeamSearchDTO;
import com.italiapros.model.TeamSearchModel;
import com.italiapros.model.entity.StaffEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TeamMapper {

    TeamDTO entityToDto(StaffEntity entity);

    StaffEntity dtoToEntity(TeamDTO dto);

    List<TeamDTO> entityListToDtoList(List<StaffEntity> entities);

    List<StaffEntity> dtoListToEntityList(List<TeamDTO> dtos);

    TeamSearchModel dtoToModel(TeamSearchDTO StaffSearchDTO);

}
