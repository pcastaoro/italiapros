package com.italiapros.component;

import com.italiapros.dto.TeamDTO;
import com.italiapros.dto.TeamSearchDTO;

import java.util.List;

public interface TeamComponent {

    TeamDTO create(TeamDTO TeamDTO);

    List<TeamDTO> getAll();

    TeamDTO getById(int id);

    TeamDTO update(int id, TeamDTO TeamDTO);

    void delete(int id);

    List<TeamDTO> search(TeamSearchDTO TeamSearchDTO);

}
