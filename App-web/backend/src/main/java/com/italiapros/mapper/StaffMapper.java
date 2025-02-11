package com.italiapros.mapper;

import com.italiapros.dto.StaffDTO;
import com.italiapros.dto.StaffSearchDTO;
import com.italiapros.model.StaffSearchModel;
import com.italiapros.model.entity.StaffEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StaffMapper {

    StaffDTO entityToDto(StaffEntity entity);

    StaffEntity dtoToEntity(StaffDTO dto);

    List<StaffDTO> entityListToDtoList(List<StaffEntity> entities);

    List<StaffEntity> dtoListToEntityList(List<StaffDTO> dtos);

    StaffSearchModel dtoToModel(StaffSearchDTO StaffSearchDTO);

}
