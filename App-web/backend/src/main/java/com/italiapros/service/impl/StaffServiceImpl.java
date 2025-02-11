package com.italiapros.service.impl;

import com.italiapros.model.StaffSearchModel;
import com.italiapros.model.entity.StaffEntity;
import com.italiapros.repository.StaffRepository;
import com.italiapros.service.StaffService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements StaffService {

    private final StaffRepository repository;

    public StaffServiceImpl(StaffRepository repository) {
        this.repository = repository;
    }

    @Override
    public StaffEntity create(StaffEntity StaffEntity) {
        return repository.create(StaffEntity);
    }

    @Override
    public List<StaffEntity> getAll() {
        return repository.getAll();
    }

    @Override
    public StaffEntity getById(int id) {
        return repository.getByid(id);
    }

    @Override
    public StaffEntity update(StaffEntity StaffEntity) {
        return repository.update(StaffEntity);
    }

    @Override
    public void delete(int id) {
        repository.delete(id);
    }

    @Override
    public List<StaffEntity> search(StaffSearchModel StaffSearchModel) {
        return repository.search(StaffSearchModel);
    }

}
