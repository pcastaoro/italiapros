package com.italiapros.controller;

import com.italiapros.component.StaffComponent;
import com.italiapros.dto.StaffDTO;
import com.italiapros.dto.StaffSearchDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/italia-pros-lol")
public class StaffController {

    private final StaffComponent component;

    public StaffController(StaffComponent component) {
        this.component = component;
    }

    @PostMapping("/staff")
    public ResponseEntity<StaffDTO> create(@RequestBody StaffDTO staffDTO) {
        return ResponseEntity.ok(component.create(staffDTO));
    }

    @GetMapping("/staffs")
    public ResponseEntity<List<StaffDTO>> getAll() {
        return ResponseEntity.ok(component.getAll());
    }

    @GetMapping("/staff/{id}")
    public ResponseEntity<StaffDTO> getById(@PathVariable int id) {
        return ResponseEntity.ok(component.getById(id));
    }

    @PutMapping("/staff/{id}")
    public ResponseEntity<StaffDTO> update(@PathVariable int id, @RequestBody StaffDTO staffDTO) {
        return ResponseEntity.ok(component.update(id, staffDTO));
    }

    @DeleteMapping("/staff/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        component.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/staffs/search")
    public ResponseEntity<List<StaffDTO>> search(@RequestBody StaffSearchDTO staffSearchDTO) {
        return ResponseEntity.ok(component.search(staffSearchDTO));
    }

}
