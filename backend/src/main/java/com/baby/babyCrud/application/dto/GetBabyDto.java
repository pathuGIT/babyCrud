package com.baby.babyCrud.application.dto;

import lombok.Data;

@Data
public class GetBabyDto {
    private int id;
    private String name;
    private int age;
    private String owner;
}
