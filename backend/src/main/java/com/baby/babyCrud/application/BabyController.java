package com.baby.babyCrud.application;

import com.baby.babyCrud.application.dto.CreateBabyDto;
import com.baby.babyCrud.application.dto.GetBabyDto;
import com.baby.babyCrud.application.dto.UpdateBabyDto;
import com.baby.babyCrud.domain.Baby;
import com.baby.babyCrud.domain.BabyService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/baby")
@AllArgsConstructor
public class BabyController {
    private final BabyService babyService;

    @PostMapping("/addBaby")
    public ResponseEntity<Baby> addBaby(@RequestBody CreateBabyDto createBabyDto){
        return babyService.addBaby(createBabyDto);
    }

    @GetMapping("/getBaby")
    public ResponseEntity<List<GetBabyDto>> getAllBaby(){
        List<GetBabyDto> getBabyDtos = babyService.getAllBaby();
        return ResponseEntity.ok(getBabyDtos);
    }

    @GetMapping("/getBaby/{id}")
    public ResponseEntity<GetBabyDto> getBaby(@PathVariable Integer id){
        return babyService.getBaby(id);
    }

    @PutMapping("/updateBaby")
    public ResponseEntity<Baby> updateBaby(@RequestBody UpdateBabyDto updateBabyDto){
        return babyService.updateBaby(updateBabyDto);
    }
    @PutMapping("/updateBaby/{id}")
    public ResponseEntity<Baby> updateBabyById(@PathVariable Integer id, @RequestBody UpdateBabyDto updateBabyDto){
        return babyService.updateBabyById(id,updateBabyDto);
    }

    @DeleteMapping("/deleteBaby/{id}")
    public ResponseEntity<String> deleteBaby(@PathVariable Integer id){
        return babyService.deleteBaby(id);
    }
}
