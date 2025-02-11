package com.italiapros.component;

import com.italiapros.dto.StaffDTO;
import com.italiapros.dto.StaffSearchDTO;

import java.util.List;

public interface StaffComponent {

    StaffDTO create(StaffDTO StaffDTO);

    List<StaffDTO> getAll();

    StaffDTO getById(int id);

    StaffDTO update(int id, StaffDTO StaffDTO);

    void delete(int id);

    List<StaffDTO> search(StaffSearchDTO StaffSearchDTO);

}
