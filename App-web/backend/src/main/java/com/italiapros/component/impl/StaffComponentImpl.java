package com.italiapros.component.impl;

import com.italiapros.component.StaffComponent;
import com.italiapros.dto.StaffDTO;
import com.italiapros.dto.StaffSearchDTO;
import com.italiapros.mapper.StaffMapper;
import com.italiapros.service.StaffService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StaffComponentImpl implements StaffComponent {

    private final StaffService service;

    private final StaffMapper mapper;

    public StaffComponentImpl(StaffService service, StaffMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @Override
    public StaffDTO create(StaffDTO StaffDTO) {
        return mapper.entityToDto(service.create(mapper.dtoToEntity(StaffDTO)));
    }

    @Override
    public List<StaffDTO> getAll() {
        return mapper.entityListToDtoList(service.getAll());
    }

    @Override
    public StaffDTO getById(int id) {
        return mapper.entityToDto(service.getById(id));
    }

    @Override
    public StaffDTO update(int id, StaffDTO StaffDTO) {
        return mapper.entityToDto(service.update(mapper.dtoToEntity(StaffDTO)));
    }

    @Override
    public void delete(int id) {
        service.delete(id);
    }

    @Override
    public List<StaffDTO> search(StaffSearchDTO StaffSearchDTO) {
        return mapper.entityListToDtoList(service.search(mapper.dtoToModel(StaffSearchDTO)));
    }

}
