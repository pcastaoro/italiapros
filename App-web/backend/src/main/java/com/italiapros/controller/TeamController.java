package com.italiapros.controller;

import com.italiapros.dto.TeamDTO;
import com.italiapros.dto.TeamSearchDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/italia-pros-lol")
public class TeamController {

    private final TeamComponent component;

    public TeamController(TeamComponent component) {
        this.component = component;
    }

    @PostMapping("/team")
    public ResponseEntity<TeamDTO> create(@RequestBody TeamDTO teamDTO) {
        return ResponseEntity.ok(component.create(teamDTO));
    }

    @GetMapping("/teams")
    public ResponseEntity<List<TeamDTO>> getAll() {
        return ResponseEntity.ok(component.getAll());
    }

    @GetMapping("/team/{id}")
    public ResponseEntity<TeamDTO> getById(@PathVariable int id) {
        return ResponseEntity.ok(component.getById(id));
    }

    @PutMapping("/team/{id}")
    public ResponseEntity<TeamDTO> update(@PathVariable int id, @RequestBody TeamDTO teamDTO) {
        return ResponseEntity.ok(component.update(id, teamDTO));
    }

    @DeleteMapping("/team/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        component.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/teams/search")
    public ResponseEntity<List<TeamDTO>> search(@RequestBody TeamSearchDTO teamSearchDTO) {
        return ResponseEntity.ok(component.search(teamSearchDTO));
    }

}
