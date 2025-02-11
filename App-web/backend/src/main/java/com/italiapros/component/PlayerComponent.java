package com.italiapros.component;

import com.italiapros.dto.PlayerDTO;
import com.italiapros.dto.PlayerSearchDTO;

import java.util.List;

public interface PlayerComponent {

    PlayerDTO create(PlayerDTO playerDTO);

    List<PlayerDTO> getAll();

    PlayerDTO getById(int id);

    PlayerDTO update(int id, PlayerDTO playerDTO);

    void delete(int id);

    List<PlayerDTO> search(PlayerSearchDTO playerSearchDTO);

}
