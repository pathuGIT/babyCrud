package com.baby.babyCrud.domain;

import com.baby.babyCrud.application.dto.CreateBabyDto;
import com.baby.babyCrud.application.dto.GetBabyDto;
import com.baby.babyCrud.application.dto.UpdateBabyDto;
import com.baby.babyCrud.externel.BabyRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BabyService {
    private final BabyRepository babyRepository;

    public ResponseEntity<Baby> addBaby(CreateBabyDto createBabyDto) {
        Baby baby = new Baby();
        baby.setName(createBabyDto.getName());
        baby.setName(createBabyDto.getName());
        baby.setAge(createBabyDto.getAge());
        baby.setOwner(createBabyDto.getOwner());
        babyRepository.save(baby);
        ResponseEntity<Baby> responseEntity = ResponseEntity.ok(baby);
        return responseEntity;
    }

    public List<GetBabyDto> getAllBaby() {
        List<Baby> optionalBaby = babyRepository.findAll();
        List<GetBabyDto> babyList = new ArrayList<>();
        GetBabyDto getBabyDto = new GetBabyDto();
        for(Baby baby : optionalBaby){
            //System.out.println("ll");
            getBabyDto.setId(baby.getId());
            getBabyDto.setName(baby.getName());
            getBabyDto.setAge(baby.getAge());
            babyList.add(getBabyDto);
        }
        return babyList;
    }

    public ResponseEntity<GetBabyDto> getBaby(Integer id) {
        Optional<Baby> optionalBaby = babyRepository.findById(id);
        GetBabyDto getBabyDto = new GetBabyDto();

        if(optionalBaby.isPresent()){
            getBabyDto.setId(optionalBaby.get().getId());
            getBabyDto.setName(optionalBaby.get().getName());
            getBabyDto.setAge(optionalBaby.get().getAge());
            return ResponseEntity.ok(getBabyDto);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Baby> updateBaby(UpdateBabyDto updateBabyDto) {
        Optional<Baby> optionalBaby = babyRepository.findById(updateBabyDto.getId());
        if(optionalBaby.isPresent()){
            Baby baby = optionalBaby.get();
            baby.setName(updateBabyDto.getName());
            baby.setAge(updateBabyDto.getAge());
            baby.setOwner(updateBabyDto.getOwner());
            babyRepository.save(baby);
            return ResponseEntity.ok(baby);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<String> deleteBaby(Integer id) {
        Optional<Baby> optionalBaby = babyRepository.findById(id);
        if (optionalBaby.isPresent()){
            babyRepository.deleteById(id);
            return ResponseEntity.ok("Deleted");
        }else{
            return ResponseEntity.ok("No baby id found.");
        }
    }
}
