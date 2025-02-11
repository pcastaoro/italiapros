package com.italiapros.controller;

import com.italiapros.component.PlayerComponent;
import com.italiapros.dto.PlayerDTO;
import com.italiapros.dto.PlayerSearchDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/italia-pros-lol")
public class PlayerController {

    private final PlayerComponent component;

    public PlayerController(PlayerComponent component) {
        this.component = component;
    }

    @PostMapping("/player")
    public ResponseEntity<PlayerDTO> create(@RequestBody PlayerDTO playerDTO) {
        return ResponseEntity.ok(component.create(playerDTO));
    }

    @GetMapping("/players")
    public ResponseEntity<List<PlayerDTO>> getAll() {
        return ResponseEntity.ok(component.getAll());
    }

    @GetMapping("/player/{id}")
    public ResponseEntity<PlayerDTO> getById(@PathVariable int id) {
        return ResponseEntity.ok(component.getById(id));
    }

    @PutMapping("/player/{id}")
    public ResponseEntity<PlayerDTO> update(@PathVariable int id, @RequestBody PlayerDTO playerDTO) {
        return ResponseEntity.ok(component.update(id, playerDTO));
    }

    @DeleteMapping("/player/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        component.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/players/search")
    public ResponseEntity<List<PlayerDTO>> search(@RequestBody PlayerSearchDTO playerSearchDTO) {
        return ResponseEntity.ok(component.search(playerSearchDTO));
    }

}
