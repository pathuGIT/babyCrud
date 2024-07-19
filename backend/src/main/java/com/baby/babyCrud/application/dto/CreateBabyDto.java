package com.baby.babyCrud.application.dto;

import lombok.Data;

@Data
public class CreateBabyDto {
    private String name;
    private int age;
    private String owner;
}
