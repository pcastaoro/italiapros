package com.italiapros.repository;

import com.italiapros.model.StaffSearchModel;
import com.italiapros.model.entity.StaffEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository {

    StaffEntity create(StaffEntity StaffEntity);

    List<StaffEntity> getAll();

    StaffEntity getByid(int id);

    StaffEntity update(StaffEntity StaffEntity);

    void delete(int id);

    List<StaffEntity> search(StaffSearchModel StaffSearchModel);
}
