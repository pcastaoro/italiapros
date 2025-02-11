package com.italiapros.service;

import com.italiapros.model.StaffSearchModel;
import com.italiapros.model.entity.StaffEntity;

import java.util.List;

public interface StaffService {

    StaffEntity create(StaffEntity StaffEntity);

    List<StaffEntity> getAll();

    StaffEntity getById(int id);

    StaffEntity update(StaffEntity StaffEntity);

    void delete(int id);

    List<StaffEntity> search(StaffSearchModel StaffSearchModel);

}
